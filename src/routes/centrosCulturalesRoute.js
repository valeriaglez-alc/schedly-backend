import express from 'express';
import { registrarCentroCultural } from '../controllers/centrosCulturalesController.js';

const router = express.Router();

router.post('/', registrarCentroCultural);

export default router;
