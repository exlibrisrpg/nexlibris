package content

import (
	"context"

	"encore.app/externaldb"
)

type Entry struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type ListEntriesResponse struct {
	Entries []Entry `json:"entries"`
}

//encore:api private path=/systems/:systemSlug/entries
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

//encore:api private path=/systems/:systemSlug/entries/:entrySlug
func GetEntry(ctx context.Context, systemSlug, entrySlug string) (*GetEntryResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	row := conn.QueryRow(ctx, `
		SELECT entries.name, entries.slug
		FROM entries
		INNER JOIN systems ON entries.system_id = systems.id
		WHERE systems.slug = $1 AND systems.live IS TRUE AND entries.slug = $2
	`, systemSlug, entrySlug)

	response := &GetEntryResponse{}

	if err := row.Scan(&response.Entry.Name, &response.Entry.Slug); err != nil {
		return nil, err
	}

	return response, nil
}
