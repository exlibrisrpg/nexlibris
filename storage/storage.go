package storage

import (
	"context"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

var secrets struct {
	S3AccessKeyID     string
	S3SecretAccessKey string
	S3BucketRegion    string
	S3BucketName      string
}

//encore:service
type Service struct {
	presignClient *s3.PresignClient
}

func initService() (*Service, error) {
	cfg, err := config.LoadDefaultConfig(context.Background(),
		config.WithCredentialsProvider(credentials.StaticCredentialsProvider{
			Value: aws.Credentials{
				AccessKeyID:     secrets.S3AccessKeyID,
				SecretAccessKey: secrets.S3SecretAccessKey,
			},
		}),
		config.WithRegion(secrets.S3BucketRegion),
	)
	if err != nil {
		return nil, err
	}

	return &Service{
		presignClient: s3.NewPresignClient(s3.NewFromConfig(cfg)),
	}, nil
}

type (
	GeneratePresignedURLRequest struct {
		ObjectKey   string
		ContentType string
	}

	GeneratePresignedURLResponse struct {
		URL string
	}
)

//encore:api private
func (s *Service) GeneratePresignedURL(ctx context.Context, params *GeneratePresignedURLRequest) (*GeneratePresignedURLResponse, error) {
	request, err := s.presignClient.PresignGetObject(ctx, &s3.GetObjectInput{
		Bucket:              &secrets.S3BucketName,
		Key:                 &params.ObjectKey,
		ResponseContentType: &params.ContentType,
	})
	if err != nil {
		return nil, err
	}

	return &GeneratePresignedURLResponse{
		URL: request.URL,
	}, nil
}
