package _6nehemie.com.server.dto.s3;

/**
 * DTO for uploading files to S3
 * @param fileUrl - URL of the file
 * @param fileKey - key of the file
 */
public record S3UploadDto(
        String fileUrl,
        String fileKey
) {
}
