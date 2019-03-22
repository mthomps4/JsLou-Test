import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Event from './Event';
import Speaker from './Speaker';
@Entity()
export default class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('simple-array')
  repos: string[];

  @OneToOne(type => Event)
  @JoinColumn()
  event: Event;

  @ManyToOne(type => Speaker, speaker => speaker.projects)
  @JoinColumn()
  contacts: Speaker[];

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
