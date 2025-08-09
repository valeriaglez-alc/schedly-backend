import db from '../config/db.js';

export const crearCentroCultural = async ({ nombre, direccion, descripcion, contacto }) => {
  const query = `
    INSERT INTO centros_culturales (nombre, direccion, descripcion, contacto)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.execute(query, [nombre, direccion, descripcion, contacto]);
  return result;
};

export const obtenerCentrosCulturales = async () => {
  const query = `SELECT * FROM centros_culturales ORDER BY id DESC`;
  const [rows] = await db.execute(query);
  return rows;
};

export const obtenerCentroPorId = async (id) => {
  const query = `SELECT * FROM centros_culturales WHERE id = ?`;
  const [rows] = await db.execute(query, [id]);
  return rows[0];
};

export const actualizarCentroCultural = async (id, { nombre, direccion, descripcion, contacto }) => {
  const query = `
    UPDATE centros_culturales
    SET nombre = ?, direccion = ?, descripcion = ?, contacto = ?
    WHERE id = ?
  `;
  const [result] = await db.execute(query, [nombre, direccion, descripcion, contacto, id]);
  return result;
};

export const eliminarCentroCultural = async (id) => {
  const query = `DELETE FROM centros_culturales WHERE id = ?`;
  const [result] = await db.execute(query, [id]);
  return result;
};
