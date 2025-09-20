// src/entities/ScheduledPayment.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Contract } from './Contract';

@Entity('scheduled_payments')
export class ScheduledPayment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contractId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  baseAmount: number;

  @Column({ type: 'date' })
  dueDate: string;

  @Column()
  paymentPeriod: string;

  @Column()
  status: 'Programado' | 'Generado' | 'Vencido';

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Contract, contract => contract.scheduledPayments)
  contract: Contract;
}