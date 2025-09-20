// src/entities/Payment.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './Contract';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contractId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  baseAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  penaltyAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  expenseAmount: number;

  @Column('simple-array', { nullable: true })
  expenseIds: string[];

  @Column({ type: 'date' })
  dueDate: string;

  @Column({ type: 'date', nullable: true })
  paidDate: string;

  @Column()
  status: 'Pendiente' | 'Pagado' | 'Atrasado' | 'Programado';

  @Column()
  paymentPeriod: string;

  @Column({ nullable: true })
  daysLate: number;

  @Column({ default: false })
  isScheduled: boolean;

  @ManyToOne(() => Contract, contract => contract.payments)
  contract: Contract;
}