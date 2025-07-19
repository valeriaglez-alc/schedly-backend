import db from '../config/db.js';

export const crearTaller = async (req, res) => {
  const { nombre, descripcion, fecha, centro_cultural_id, creado_por } = req.body;

  try {
    const query = `
      INSERT INTO talleres (nombre, descripcion, fecha, centro_cultural_id, creado_por, created_at)
      VALUES (?, ?, ?, ?, ?, NOW())
    `;
    const values = [nombre, descripcion, fecha, centro_cultural_id, creado_por];

    const [result] = await db.execute(query, values);

    console.log('Resultado inserción:', result);

    res.status(201).json({ mensaje: 'Taller creado exitosamente ✅' });
  } catch (error) {
    console.error('❌ Error al crear taller:', error);
    res.status(500).json({ mensaje: 'Error al registrar el taller' });
  }
};
