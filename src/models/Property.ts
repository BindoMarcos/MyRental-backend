import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Tenant } from './Tenant';
import { Contract } from './Contract';
import { Expense } from './Expense';
import { User } from './User';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  address: string = "";

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rent: number = 0;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  expenses: number = 0;

  @Column()
  status: 'Alquilada' | 'Disponible' = 'Disponible';

  @Column({ nullable: true })
  lastPaymentStatus: string = "";

  @Column({ type: 'date', nullable: true })
  nextPaymentDate: string | undefined;

  @Column({ type: 'simple-json', nullable: true })
  buildingInfo!: { floors: number; unitsPerFloor: number; totalUnits: number };

  @Column({ type: 'simple-json', nullable: true })
  unitInfo!: { floor: number; unitNumber: string; unitType?: string };

  @Column({ nullable: true })
  type: 'single' | 'building' = "single";

  @Column({ nullable: true, default: '' })
  parentId: string = "";

  @OneToOne(() => Contract, contract => contract.property)
  contract: Contract | undefined;

  @OneToMany(() => Expense, expense => expense.property)
  expensesRecords: Expense[] | undefined;

  @ManyToOne(() => User, owner => owner.properties)
  owner!: User;
}