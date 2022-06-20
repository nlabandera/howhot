import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users } from '../users/user.entity';

@Entity()
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @OneToMany( () => Users , (users) => users.votes)
  users: Users[];


}
