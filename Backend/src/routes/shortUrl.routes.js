import express from 'express';
import { createShortUrl } from '../controller/shortUrl.controller.js'; // Import the controller function

const router = express.Router();

router.post('/', createShortUrl);

export default router;