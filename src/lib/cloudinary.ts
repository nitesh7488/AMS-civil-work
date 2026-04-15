// src/lib/cloudinary.ts
// Cloudinary v2 upload helper used by the /api/upload route.

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name:  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:     process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_SECRET,
  secure:      true,
});

export default cloudinary;

/**
 * Upload a base64 data-URL (or remote URL) to Cloudinary.
 * Returns the secure HTTPS URL of the uploaded image.
 */
export async function uploadImage(
  dataUrlOrRemoteUrl: string,
  folder = 'mandal-civil-projects',
): Promise<string> {
  const result = await cloudinary.uploader.upload(dataUrlOrRemoteUrl, {
    folder,
    transformation: [{ quality: 'auto', fetch_format: 'auto' }],
  });
  return result.secure_url;
}
