import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, Connection, JoinColumn } from 'typeorm';
import { Roles } from './role.entity';
import { States } from './state.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @Column()
  votes: string;

  // @ManyToOne( () => States)
  @ManyToOne(() => States, (states) => states, {cascade: true})
  @JoinColumn({name: 'votes', referencedColumnName: 'id' })
  state: States;

}
