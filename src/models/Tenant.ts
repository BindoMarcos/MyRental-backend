// src/entities/Tenant.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Contract } from './Contract';

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  firstName: string = "";

  @Column()
  lastName: string = "";

  @Column({ unique: true })
  dni: number = 0;

  @Column({ unique: true })
  email: string = "";

  @Column()
  phone: string = "";

  @ManyToMany(() => Contract, contract => contract.tenants, { nullable: true })
  contracts!: Contract[];

}