import { crearCentroCultural } from '../models/CentroCultural.js';

export const registrarCentroCultural = async (req, res) => {
  const { nombre, direccion, descripcion, contacto } = req.body;

  if (!nombre || !direccion || !descripcion || !contacto) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const resultado = await crearCentroCultural({ nombre, direccion, descripcion, contacto });

    res.status(201).json({
      mensaje: 'Centro cultural registrado exitosamente ✅',
      centro_id: resultado.insertId,
    });
  } catch (error) {
    console.error('❌ Error al registrar centro cultural:', error.message);
    res.status(500).json({ mensaje: 'Error al registrar centro cultural' });
  }
};
