import db from '../config/db.js';

export const crearUsuario = async (req, res) => {
  const { nombre, email, contraseña, tipo } = req.body;

  console.log('Datos recibidos:', req.body); // 👈 Aquí lo agregas

  if (!tipo) {
    return res.status(400).json({ mensaje: 'Falta el campo tipo de usuario' });
  }

  try {
    const query = `
      INSERT INTO usuarios (nombre, email, contraseña, tipo, fecha_registro)
      VALUES (?, ?, ?, ?, NOW())
    `;
    const values = [nombre, email, contraseña, tipo];

    const [result] = await db.execute(query, values);

    console.log('✅ Usuario registrado:', result);

    res.status(201).json({
      mensaje: 'Usuario creado exitosamente ✅',
      usuario: {
        nombre,
        email,
        tipo
      }
    });
  } catch (error) {
    console.error('❌ Error al crear usuario:', error.message);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
};
