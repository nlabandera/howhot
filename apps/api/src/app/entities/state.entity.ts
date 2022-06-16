import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @OneToMany(() => Users, (users)=> users.states)
  public users: Users[];


}
