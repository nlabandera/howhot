import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

}
