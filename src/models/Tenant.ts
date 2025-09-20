// src/entities/Tenant.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Contract } from './Contract';
import { Property } from './Property';

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  dni: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @ManyToMany(() => Contract, contract => contract.tenants)
  contracts: Contract[];

  @ManyToOne(() => Property, property => property.tenants)
  property: Property;
}