import db from '../config/db.js';

export const crearCentroCultural = async ({ nombre, direccion, descripcion, contacto }) => {
  const query = `
    INSERT INTO centros_culturales (nombre, direccion, descripcion, contacto)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.execute(query, [nombre, direccion, descripcion, contacto]);
  return result;
};
