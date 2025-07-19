import express from 'express';
import { crearAsistencia } from '../controllers/asistenciasController.js';

const router = express.Router();

router.post('/', crearAsistencia);

export default router;
