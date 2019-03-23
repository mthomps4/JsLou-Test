import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Event from './Event';
import ProfileDetails from './ProfileDetails';
import Project from './Project';

@Entity()
export default class Speaker extends ProfileDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Event, event => event.speaker)
  events: Event[];

  @OneToMany(type => Project, project => project.contacts)
  projects: Project[];

  @CreateDateColumn({ readonly: true })
  public createdAt!: Date;

  @UpdateDateColumn({ readonly: true })
  public updatedAt!: Date;
}
