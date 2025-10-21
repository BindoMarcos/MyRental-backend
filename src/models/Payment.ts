// src/entities/Payment.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './Contract';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  contractId: string = "";

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number = 0;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  baseAmount: number = 0;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  penaltyAmount: number = 0;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  expenseAmount: number = 0;

  @Column('simple-array', { nullable: true })
  expenseIds!: string[];

  @Column({ type: 'date' })
  dueDate: string = "";

  @Column({ type: 'date', nullable: true })
  paidDate: string = "";

  @Column()
  status: 'Pendiente' | 'Pagado' | 'Atrasado' | 'Programado' = "Pendiente";

  @Column()
  paymentPeriod: string = "";

  @Column({ nullable: true })
  daysLate: number = 0;

  @Column({ default: false })
  isScheduled: boolean = true;

  @ManyToOne(() => Contract, contract => contract.payments)
  contract: Contract = new Contract;
}