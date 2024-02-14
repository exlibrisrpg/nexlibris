package content

import (
	"context"

	"encore.app/externaldb"
)

type System struct {
	Name    string `json:"name"`
	Slug    string `json:"slug"`
	Tagline string `json:"tagline"`
}

type ListSystemsResponse struct {
	Systems []System `json:"systems"`
}

//encore:api private path=/systems
func ListSystems(ctx context.Context) (*ListSystemsResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	rows, err := conn.Query(ctx, `
		SELECT name, slug, tagline
		FROM systems
		WHERE live IS TRUE
	`)
	if err != nil {
		return nil, err
	}

	response := &ListSystemsResponse{}

	for rows.Next() {
		var system System

		if err := rows.Scan(&system.Name, &system.Slug, &system.Tagline); err != nil {
			return nil, err
		}

		response.Systems = append(response.Systems, system)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return response, nil
}

type GetSystemResponse struct {
	System System `json:"system"`
}

//encore:api private path=/systems/:systemSlug
func GetSystem(ctx context.Context, systemSlug string) (*GetSystemResponse, error) {
	conn, err := externaldb.Get(ctx)
	if err != nil {
		return nil, err
	}

	row := conn.QueryRow(ctx, `
		SELECT name, slug, tagline
		FROM systems
		WHERE slug = $1 AND live IS TRUE
	`, systemSlug)

	response := &GetSystemResponse{}

	if err := row.Scan(&response.System.Name, &response.System.Slug, &response.System.Tagline); err != nil {
		return nil, err
	}

	return response, nil
}
