import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  vote: string;

  // @Column()
  // timestamp: number;

}
