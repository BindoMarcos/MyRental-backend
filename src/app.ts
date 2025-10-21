import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes';
import { AppDataSource } from './data-source';
import authRoutes from './routes/authRoutes';
import path from 'path';
import tenantRoutes from './routes/tenantRoutes';

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/auth', authRoutes);
app.use('/api/property', propertyRoutes);
app.use('/api/tenant', tenantRoutes);
app.use('/api/contract', contractRoutes);/*
app.use('/api/payments', paymentRoutes);
app.use('/api/expenses', expenseRoutes); */

// Conexión a la base de datos y arranque del servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error during Data Source initialization:', error));