// src/entities/Contract.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';
import { Property } from './Property';
import { Tenant } from './Tenant';
import { Payment } from './Payment';
import { ScheduledPayment } from './ScheduledPayment';

@Entity('contracts')
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  propertyId: string;

  @Column('simple-array')
  tenantIds: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rentAmount: number;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column()
  increaseFrequency: number;

  @Column()
  penaltyPercentage: number;

  @Column({ nullable: true })
  contractFile: string;

  @Column()
  status: 'Activo' | 'Vencido' | 'Cancelado';

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Property, property => property.contracts)
  property: Property;

  @ManyToMany(() => Tenant, tenant => tenant.contracts)
  @JoinTable()
  tenants: Tenant[];

  @OneToMany(() => Payment, payment => payment.contract)
  payments: Payment[];

  @OneToMany(() => ScheduledPayment, scheduledPayment => scheduledPayment.contract)
  scheduledPayments: ScheduledPayment[];
}