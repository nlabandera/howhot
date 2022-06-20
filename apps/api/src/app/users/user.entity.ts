import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, Connection, JoinColumn, ViewEntity } from 'typeorm';
import { States } from '../states/state.entity';



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
  @ManyToOne(() => States, (states) => states.users, {cascade: true})
  @JoinColumn({name: 'votes', referencedColumnName: 'id' })
  state: States;

}

// @ViewEntity({
//   expression: `
//     SELECT state, email FROM states INNER JOIN users on states.id = users.votes;
//   `,
// })
// export class UserVotes {}
