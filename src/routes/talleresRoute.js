import express from 'express';
import { crearTaller } from '../controllers/crearTaller.js';

const router = express.Router();

// Ruta POST para crear talleres
router.post('/', crearTaller);

export default router;
