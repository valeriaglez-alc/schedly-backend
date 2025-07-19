import { registrarAsistencia } from '../models/Asistencia.js';

export const crearAsistencia = async (req, res) => {
  const { talleres_id, user_id, fecha_asistencia } = req.body;

  if (!talleres_id || !user_id || !fecha_asistencia) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const resultado = await registrarAsistencia({ talleres_id, user_id, fecha_asistencia });

    res.status(201).json({
      mensaje: 'Asistencia registrada exitosamente ✅',
      asistencia_id: resultado.insertId,
    });
  } catch (error) {
    console.error('❌ Error al registrar asistencia:', error.message);
    res.status(500).json({ mensaje: 'Error al registrar asistencia' });
  }
};
