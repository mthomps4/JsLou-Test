import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Address from './Address';
import Project from './Project';
import Speaker from './Speaker';
import User from './User';

@Entity()
export default class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Speaker, speaker => speaker.events)
  speaker: Speaker;

  @OneToMany(type => Project, project => project.events)
  project: Project;

  @Column('timestamp')
  datetime: string;

  @OneToMany(type => Address, address => address.events)
  location: Address;

  @Column()
  meetupUrl: string;

  @Column('simple-array')
  extraLinks: string[];

  @OneToMany(type => User, user => user.events)
  organizer: User;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
