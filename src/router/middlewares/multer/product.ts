import multer from 'multer';
import { uploadPath } from './utils/config';

export const productUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, uploadPath);
    },

    filename(req, file, callback) {
      const timestamp = Date.now();
      const originalFilename = file.originalname?.trim()?.replace(/\s/g, '_');
      const filename = `${timestamp}-${originalFilename}`;

      callback(null, filename);
    },
  })
});
