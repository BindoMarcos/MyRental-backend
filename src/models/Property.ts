import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Tenant } from './Tenant';
import { Contract } from './Contract';
import { Expense } from './Expense';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rent: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  expenses: number;

  @Column()
  status: 'Alquilada' | 'Disponible';

  @Column({ nullable: true })
  lastPaymentStatus: string;

  @Column({ type: 'date', nullable: true })
  nextPaymentDate: string;

  @Column({ type: 'simple-json', nullable: true })
  buildingInfo: { floors: number; unitsPerFloor: number; totalUnits: number };

  @Column({ type: 'simple-json', nullable: true })
  unitInfo: { floor: number; unitNumber: string; unitType?: string };

  @Column({ nullable: true })
  type: 'single' | 'building';

  @Column({ nullable: true })
  parentId: string;

  @OneToMany(() => Tenant, tenant => tenant.property)
  tenants: Tenant[];

  @OneToMany(() => Contract, contract => contract.property)
  contracts: Contract[];

  @OneToMany(() => Expense, expense => expense.property)
  expensesRecords: Expense[];
}