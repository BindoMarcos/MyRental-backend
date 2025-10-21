import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, CreateDateColumn, OneToOne } from 'typeorm';
import { Property } from './Property';
import { Tenant } from './Tenant';
import { Payment } from './Payment';
import { ScheduledPayment } from './ScheduledPayment';

@Entity('contracts')
export class Contract {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column()
  propertyId: string = "";

  @Column('simple-array')
  tenantIds!: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rentAmount: number = 0;

  @Column({ type: 'date' })
  startDate: string = "";

  @Column({ type: 'date' })
  endDate: string = "";

  @Column()
  increaseFrequency: number = 0;

  @Column()
  penaltyPercentage: number = 0;

  @Column({ nullable: true })
  contractFile: string = "";

  @Column()
  status: 'Activo' | 'Vencido' | 'Cancelado' | 'Inactivo' = 'Inactivo';

  @CreateDateColumn()
  createdAt: string = "";

  @OneToOne(() => Property, property => property.contract)
  property: Property = new Property;

  @ManyToMany(() => Tenant, tenant => tenant.contracts)
  @JoinTable()
  tenants!: Tenant[];

  @OneToMany(() => Payment, payment => payment.contract)
  payments!: Payment[];

  @OneToMany(() => ScheduledPayment, scheduledPayment => scheduledPayment.contract)
  scheduledPayments!: ScheduledPayment[];
  
}