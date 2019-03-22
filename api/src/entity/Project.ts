import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(type => Speaker, speaker => speaker.projects)
  @JoinColumn()
  contacts: Speaker[];

  @ManyToOne(type => Event, event => event.project)
  @JoinColumn()
  events: Event[];

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
