package content

import (
	"context"

	"encore.app/externaldb"
	"encore.app/storage"
)

type Entry struct {
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	CoverURL    string `json:"coverURL"`
}

type ListEntriesResponse struct {
	Entries []Entry `json:"entries"`
}

//encore:api auth path=/systems/:systemSlug/entries
func ListEntries(ctx context.Context, systemSlug string) (*ListEntriesResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	rows, err := conn.Query(ctx, `
		SELECT entries.name, entries.slug
		FROM entries
		INNER JOIN systems ON entries.system_id = systems.id
		WHERE systems.slug = $1 AND systems.live IS TRUE
	`, systemSlug)
	if err != nil {
		return nil, err
	}

	response := &ListEntriesResponse{}

	for rows.Next() {
		var entry Entry

		if err := rows.Scan(&entry.Name, &entry.Slug); err != nil {
			return nil, err
		}

		response.Entries = append(response.Entries, entry)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return response, nil
}

type GetEntryResponse struct {
	Entry Entry `json:"entry"`
}

//encore:api auth path=/systems/:systemSlug/entries/:entrySlug
func GetEntry(ctx context.Context, systemSlug, entrySlug string) (*GetEntryResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	var (
		objectKey   string
		contentType string
	)

	row := conn.QueryRow(ctx, `
		SELECT entries.name, entries.slug, action_text_rich_texts.body, active_storage_blobs.key, active_storage_blobs.content_type
		FROM entries
		INNER JOIN systems ON entries.system_id = systems.id
		LEFT JOIN action_text_rich_texts ON action_text_rich_texts.record_id = entries.id AND action_text_rich_texts.record_type = 'Entry'
		LEFT JOIN active_storage_attachments ON active_storage_attachments.record_id = entries.id AND active_storage_attachments.record_type = 'Entry'
		LEFT JOIN active_storage_blobs ON active_storage_blobs.id = active_storage_attachments.blob_id
		WHERE systems.slug = $1 AND systems.live IS TRUE AND entries.slug = $2
	`, systemSlug, entrySlug)

	response := &GetEntryResponse{}

	if err := row.Scan(&response.Entry.Name, &response.Entry.Slug, &response.Entry.Description, &objectKey, &contentType); err != nil {
		return nil, err
	}

	coverImage, err := storage.GeneratePresignedURL(ctx, &storage.GeneratePresignedURLRequest{
		ObjectKey:   objectKey,
		ContentType: contentType,
	})
	if err != nil {
		return nil, err
	}

	response.Entry.CoverURL = coverImage.URL

	return response, nil
}
