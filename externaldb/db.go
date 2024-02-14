package externaldb

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
	"go4.org/syncutil"
)

func Get(ctx context.Context) (*pgxpool.Pool, error) {
	err := once.Do(func() error {
		var err error
		pool, err = setup(ctx)
		return err
	})
	return pool, err
}

var (
	once syncutil.Once
	pool *pgxpool.Pool
)

var secrets struct {
	NeonDatabaseURL string
}

func setup(ctx context.Context) (*pgxpool.Pool, error) {
	return pgxpool.New(ctx, secrets.NeonDatabaseURL)
}
