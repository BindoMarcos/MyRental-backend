// src/entities/ExpenseAllocation.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Expense } from "./Expense";
import { Payment } from "./Payment";
import { Property } from "./Property";



@Entity('expense_allocations')
export class ExpenseAllocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  expenseId: string;

  @Column()
  propertyId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  allocatedAmount: number;

  @Column({ nullable: true })
  paymentId: string;

  @Column({ type: 'date', nullable: true })
  paidDate: string;

  @Column()
  status: 'Allocated' | 'Paid';

  @ManyToOne(() => Expense, expense => expense.allocations)
  expense: Expense;

 /*  @ManyToOne(() => Payment, payment => payment.expenseAllocations)
  payment: Payment;
 */
  @ManyToOne(() => Property)
  property: Property;
}