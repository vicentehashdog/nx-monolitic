import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '@nex-test/data';

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  email: string;
}