import { CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import Event from './Event';
import ProfileDetails from './ProfileDetails';
import Project from './Project';

@Entity()
export default class Speaker extends ProfileDetails {
  @OneToMany(type => Event, event => event.speaker)
  events: Event[];

  @OneToMany(type => Project, project => project.contacts)
  projects: Project[];

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
