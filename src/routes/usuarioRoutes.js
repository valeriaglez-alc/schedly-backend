import express from 'express';
import { crearUsuario } from '../controllers/crearUsuario.js';

const router = express.Router();

// Ruta POST para registrar usuarios
router.post('/', crearUsuario);

export default router;
