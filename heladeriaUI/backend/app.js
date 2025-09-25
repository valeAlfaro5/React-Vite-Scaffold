import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import heladeriaRoutes from './controllers/heladeriaController.js'; 

// Load environment variables as early as possible
dotenv.config();
const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// rutas separadas
app.use('/nuevo-helado', heladeriaRoutes.createHelados); // POST
app.use('/helados', heladeriaRoutes.getHelados);      // GET

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Conexión MongoDB y levantar servidor
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err.message));

app.listen(port, () => console.log(`🚀 Servidor corriendo en http://localhost:${port}`));
export default app;
