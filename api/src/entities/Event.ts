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

  @Column({ nullable: false })
  name: string;

  @ManyToOne(type => Speaker, speaker => speaker.events)
  speaker: Speaker;

  @OneToMany(type => Project, project => project.events)
  project: Project;

  @Column('timestamp', { nullable: false })
  datetime: string;

  @OneToMany(type => Address, address => address.events)
  location: Address;

  @Column({ nullable: true })
  meetupUrl: string;

  @Column('simple-array', { nullable: true })
  extraLinks: string[];

  @OneToMany(type => User, user => user.events)
  organizer: User;

  @CreateDateColumn({ readonly: true })
  public createdAt!: Date;

  @UpdateDateColumn({ readonly: true })
  public updatedAt!: Date;
}
