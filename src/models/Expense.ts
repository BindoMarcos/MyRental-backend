// src/entities/Expense.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Property } from './Property';
import { ExpenseAllocation } from './ExpenseAllocation';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  title: string = "";

  @Column({ nullable: true })
  description: string = "";

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number = 0;

  @Column({ type: 'date' })
  date: string = "";

  @Column()
  assignmentType: 'property' | 'building' = "property";

  @Column({ nullable: true })
  propertyId: string = "";

  @Column({ nullable: true })
  buildingId: string = "";

  @Column()
  distributionMethod: 'equal' | 'custom' = "custom";

  @Column('simple-json', { nullable: true })
  unitDistribution!: { [unitId: string]: number };

  @Column({ nullable: true })
  unitsCount: number = 0;

  @Column({ nullable: true })
  receiptFile: string = "";

  @Column()
  status: 'Pending' | 'Paid' | 'Approved' = 'Pending';

  @CreateDateColumn()
  createdAt: string = "";

  @ManyToOne(() => Property, property => property.expensesRecords)
  property: Property = new Property;

  @OneToMany(() => ExpenseAllocation, allocation => allocation.expense)
  allocations!: ExpenseAllocation[];
}