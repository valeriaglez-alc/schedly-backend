import express from 'express';
import {
  registrarCentroCultural,
  listarCentrosCulturales,
  obtenerCentro,
  editarCentroCultural,
  borrarCentroCultural
} from '../controllers/centrosCulturalesController.js';

const router = express.Router();

router.post('/', registrarCentroCultural);
router.get('/', listarCentrosCulturales);
router.get('/:id', obtenerCentro);
router.put('/:id', editarCentroCultural);
router.delete('/:id', borrarCentroCultural);

export default router;
