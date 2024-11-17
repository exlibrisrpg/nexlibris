package content

import (
	"context"

	"encore.app/externaldb"
	"encore.dev/types/uuid"
)

type Tag struct {
	Name    string  `json:"name"`
	Slug    string  `json:"slug"`
	Entries []Entry `json:"entries"`
}

type ListTagsRequest struct {
	Limit int `json:"limit"`
}

type ListTagsResponse struct {
	Tags []Tag `json:"tags"`
}

//encore:api auth path=/systems/:systemSlug/tags
func ListTags(ctx context.Context, systemSlug string, request *ListTagsRequest) (*ListTagsResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	rows, err := conn.Query(ctx, `
		SELECT tags.name, tags.slug
		FROM tags
		INNER JOIN systems ON
			tags.system_id = systems.id AND
			systems.slug = $1 AND
			systems.live IS TRUE
		LIMIT $2
	`, systemSlug, request.Limit)
	if err != nil {
		return nil, err
	}

	response := &ListTagsResponse{}

	for rows.Next() {
		var tag Tag

		if err := rows.Scan(&tag.Name, &tag.Slug); err != nil {
			return nil, err
		}

		response.Tags = append(response.Tags, tag)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return response, nil
}

type GetTagResponse struct {
	Tag Tag `json:"tag"`
}

//encore:api auth path=/systems/:systemSlug/tags/:tagSlug
func GetTag(ctx context.Context, systemSlug, tagSlug string) (*GetTagResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	tagRow := conn.QueryRow(ctx, `
		SELECT tags.id, tags.name, tags.slug
		FROM tags
		INNER JOIN systems ON tags.system_id = systems.id
		LEFT JOIN friendly_id_slugs ON tags.id = friendly_id_slugs.sluggable_id AND friendly_id_slugs.sluggable_type = 'Tag'
		WHERE systems.slug = $1 AND systems.live IS TRUE AND (
			tags.slug = $2 OR
			tags.id::text = $2 OR
			friendly_id_slugs.slug = $2
		)
	`, systemSlug, tagSlug)

	response := &GetTagResponse{}
	var tagId uuid.UUID

	if err := tagRow.Scan(&tagId, &response.Tag.Name, &response.Tag.Slug); err != nil {
		return nil, err
	}

	entriesRows, err := conn.Query(ctx, `
		SELECT entries.name, entries.slug
		FROM entries
		INNER JOIN entries_tags ON entries.id = entries_tags.entry_id
		WHERE entries_tags.tag_id = $1
	`, tagId)
	if err != nil {
		return nil, err
	}

	for entriesRows.Next() {
		var entry Entry

		if err := entriesRows.Scan(&entry.Name, &entry.Slug); err != nil {
			return nil, err
		}

		response.Tag.Entries = append(response.Tag.Entries, entry)
	}

	if err := entriesRows.Err(); err != nil {
		return nil, err
	}

	return response, nil
}
