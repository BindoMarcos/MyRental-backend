// /src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './models/User';
import { Property } from './models/Property';

// ... importa todas las demás entidades

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true, // ¡Usar solo para desarrollo! Crea y actualiza automáticamente las tablas.
  logging: false,
  entities: [User, Property, /* ... y todas las demás entidades */],
  subscribers: [],
  migrations: [],
});