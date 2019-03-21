import { CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import Event from './Event';
import ProfileDetails from './ProfileDetails';

@Entity()
export default class Speaker extends ProfileDetails {
  @OneToMany(type => Event, event => event.speaker)
  events: Event[];

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
