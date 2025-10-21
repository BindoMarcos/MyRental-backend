import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './models/User';
import { Property } from './models/Property';
import { Payment } from './models/Payment';
import { Tenant } from './models/Tenant';
import { Contract } from './models/Contract';
import { ScheduledPayment } from './models/ScheduledPayment';
import { Expense } from './models/Expense';
import { ExpenseAllocation } from './models/ExpenseAllocation';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [User, Property, Expense, ExpenseAllocation, Payment, Tenant, ScheduledPayment, Contract],
  subscribers: [],
  migrations: [],
});
