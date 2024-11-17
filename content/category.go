package content

import (
	"context"

	"encore.app/externaldb"
)

type Category struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type ListCategoriesResponse struct {
	Categories []Category `json:"categories"`
}

//encore:api auth path=/systems/:systemSlug/categories
func ListCategories(ctx context.Context, systemSlug string) (*ListCategoriesResponse, error) {
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
		INNER JOIN tag_categories ON
			tags.tag_category_id = tag_categories.id AND
			tag_categories.name = 'Categories'
		ORDER BY tags.order
	`, systemSlug)
	if err != nil {
		return nil, err
	}

	response := &ListCategoriesResponse{}

	for rows.Next() {
		var category Category

		if err := rows.Scan(&category.Name, &category.Slug); err != nil {
			return nil, err
		}

		response.Categories = append(response.Categories, category)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return response, nil
}
