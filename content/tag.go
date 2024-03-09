package content

import (
	"context"

	"encore.app/externaldb"
)

type Tag struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type ListTagsResponse struct {
	Tags []Tag `json:"tags"`
}

//encore:api auth path=/systems/:systemSlug/tags
func ListTags(ctx context.Context, systemSlug string) (*ListTagsResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	rows, err := conn.Query(ctx, `
		SELECT tags.name, tags.slug
		FROM tags
		INNER JOIN systems ON tags.system_id = systems.id
		WHERE systems.slug = $1 AND systems.live IS TRUE
	`, systemSlug)
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
