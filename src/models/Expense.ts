// src/entities/Expense.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Property } from './Property';
import { ExpenseAllocation } from './ExpenseAllocation';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  date: string;

  @Column()
  category: 'Maintenance' | 'Utilities' | 'Insurance' | 'Taxes' | 'Repairs' | 'Other';

  @Column()
  assignmentType: 'property' | 'building';

  @Column({ nullable: true })
  propertyId: string;

  @Column({ nullable: true })
  buildingId: string;

  @Column()
  distributionMethod: 'equal' | 'custom';

  @Column('simple-json', { nullable: true })
  unitDistribution: { [unitId: string]: number };

  @Column({ nullable: true })
  unitsCount: number;

  @Column({ nullable: true })
  receiptFile: string;

  @Column()
  status: 'Pending' | 'Paid' | 'Approved';

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Property, property => property.expensesRecords)
  property: Property;

  @OneToMany(() => ExpenseAllocation, allocation => allocation.expense)
  allocations: ExpenseAllocation[];
}