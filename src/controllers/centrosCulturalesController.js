import {
  crearCentroCultural,
  obtenerCentrosCulturales,
  obtenerCentroPorId,
  actualizarCentroCultural,
  eliminarCentroCultural
} from '../models/CentroCultural.js';

export const registrarCentroCultural = async (req, res) => {
  const { nombre, direccion, descripcion, contacto } = req.body;

  if (!nombre || !direccion || !descripcion || !contacto) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const resultado = await crearCentroCultural({ nombre, direccion, descripcion, contacto });
    res.status(201).json({ mensaje: 'Centro cultural registrado exitosamente ✅', centro_id: resultado.insertId });
  } catch (error) {
    console.error('❌ Error al registrar centro cultural:', error.message);
    res.status(500).json({ mensaje: 'Error al registrar centro cultural' });
  }
};

export const listarCentrosCulturales = async (req, res) => {
  try {
    const centros = await obtenerCentrosCulturales();
    res.json(centros);
  } catch (error) {
    console.error('❌ Error al obtener centros culturales:', error.message);
    res.status(500).json({ mensaje: 'Error al obtener centros culturales' });
  }
};

export const obtenerCentro = async (req, res) => {
  try {
    const centro = await obtenerCentroPorId(req.params.id);
    if (!centro) return res.status(404).json({ mensaje: 'Centro cultural no encontrado' });
    res.json(centro);
  } catch (error) {
    console.error('❌ Error al obtener centro cultural:', error.message);
    res.status(500).json({ mensaje: 'Error al obtener centro cultural' });
  }
};

export const editarCentroCultural = async (req, res) => {
  const { nombre, direccion, descripcion, contacto } = req.body;

  try {
    await actualizarCentroCultural(req.params.id, { nombre, direccion, descripcion, contacto });
    res.json({ mensaje: 'Centro cultural actualizado correctamente ✅' });
  } catch (error) {
    console.error('❌ Error al actualizar centro cultural:', error.message);
    res.status(500).json({ mensaje: 'Error al actualizar centro cultural' });
  }
};

export const borrarCentroCultural = async (req, res) => {
  try {
    await eliminarCentroCultural(req.params.id);
    res.json({ mensaje: 'Centro cultural eliminado correctamente 🗑️' });
  } catch (error) {
    console.error('❌ Error al eliminar centro cultural:', error.message);
    res.status(500).json({ mensaje: 'Error al eliminar centro cultural' });
  }
};
