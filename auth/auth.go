package auth

import (
	"context"

	"encore.dev/beta/auth"
	"encore.dev/beta/errs"
)

var secrets struct {
	FrontendAuthToken string
}

//encore:authhandler
func AuthHandler(ctx context.Context, token string) (auth.UID, error) {
	if token != secrets.FrontendAuthToken {
		return "", &errs.Error{
			Code:    errs.Unauthenticated,
			Message: "invalid auth token",
		}
	}

	return "frontend", nil
}
