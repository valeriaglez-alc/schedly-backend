import db from '../config/db.js';

export const registrarAsistencia = async ({ talleres_id, user_id, fecha_asistencia }) => {
  const query = `
    INSERT INTO asistencias (talleres_id, user_id, fecha_asistencia)
    VALUES (?, ?, ?)
  `;
  const [result] = await db.execute(query, [talleres_id, user_id, fecha_asistencia]);
  return result;
};
