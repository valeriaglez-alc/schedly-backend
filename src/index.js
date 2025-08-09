import express from 'express';
import db from './src/config/db.js';
import dotenv from 'dotenv';
import talleresRoute from './src/routes/talleresRoute.js';
import usuarioRoute from './src/routes/usuarioRoute.js';
import centrosCulturalesRoute from './src/routes/centrosCulturalesRoute.js';
import asistenciasRoute from './src/routes/asistenciasRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();  // Mueve esta línea arriba, antes de usar app

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/talleres', talleresRoute);
app.use('/api/usuarios', usuarioRoute);
app.use('/api/centros', centrosCulturalesRoute);
app.use('/api/asistencias', asistenciasRoute);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
