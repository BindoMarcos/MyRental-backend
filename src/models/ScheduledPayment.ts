// src/entities/ScheduledPayment.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Contract } from './Contract';

@Entity('scheduled_payments')
export class ScheduledPayment {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  contractId: string = "";

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  baseAmount: number = 0;

  @Column({ type: 'date' })
  dueDate: string = "";

  @Column()
  paymentPeriod: string = "";

  @Column()
  status: 'Programado' | 'Generado' | 'Vencido' = "Programado"; 

  @CreateDateColumn()
  createdAt: string = "";

  @ManyToOne(() => Contract, contract => contract.scheduledPayments)
  contract: Contract = new Contract();
}