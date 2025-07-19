import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

let db;

async function connectDB() {
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('✅ Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    process.exit(1); // termina la app si no conecta
  }
}

await connectDB();

export default db;
