import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne, OneToMany } from 'typeorm';
import bcrypt from 'bcrypt';
import { Property } from './Property';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @Column({ length: 10 })
  dni: string = "0";

  @Column({ length: 20 })
  name: string = "";

  @Column({ length: 20 })
  surname: string = "";

  @Column({ unique: true })
  email: string = '';

  @Column()
  password: string = '';

  @Column({ default: 'user' })
  role: 'user' | 'admin' = 'user';

  @Column({ default: true })
  isActive: boolean = true;

  @OneToMany(() => Property, property => property.owner)
  properties!: Property[];

  // Hook de TypeORM para hashear la contraseña antes de guardarla
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}