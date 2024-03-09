package content

import (
	"context"

	"encore.app/externaldb"
)

type (
	SearchRequest struct {
		Query string `json:"query"`
	}
	SearchResponse struct {
		Entries []Entry `json:"entries"`
	}
)

//encore:api auth path=/systems/:systemSlug/search
func Search(ctx context.Context, systemSlug string, params *SearchRequest) (*SearchResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	rows, err := conn.Query(ctx, `
		SELECT entries.name, entries.slug
		FROM entries
		INNER JOIN systems ON entries.system_id = systems.id
		LEFT JOIN action_text_rich_texts ON action_text_rich_texts.record_id = entries.id AND action_text_rich_texts.record_type = 'Entry'
		WHERE systems.slug = $1 AND systems.live IS TRUE AND (
			to_tsvector('en', entries.name) @@ websearch_to_tsquery(unaccent($2)) OR
			to_tsvector('en', action_text_rich_texts.body) @@ websearch_to_tsquery(unaccent($2))
		)
	`, systemSlug, params.Query)
	if err != nil {
		return nil, err
	}

	response := &SearchResponse{}

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
