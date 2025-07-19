import db from '../config/db.js';

export const crearTaller = (taller, callback) => {
  const { nombre, descripcion, fecha, centro_id, creado_por } = taller;
  const query = 'INSERT INTO talleres (nombre, descripcion, fecha, centro_id, creado_por, created_at) VALUES (?, ?, ?, ?, ?, NOW())';
  db.query(query, [nombre, descripcion, fecha, centro_id, creado_por], callback);
};

// Las demás funciones igual, ajusta según necesites...
