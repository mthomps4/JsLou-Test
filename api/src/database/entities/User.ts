import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Event from './Event';
import ProfileDetails from './ProfileDetails';

// Admin - Can add other admins (owner)
// Editor - Can add/update events and speakers
// Viewer - Not one of the others -- default until changed by Admin

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer'
}

@Entity()
export default class User extends ProfileDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.VIEWER
  })
  role: UserRole;

  @ManyToOne(type => Event, event => event.organizer)
  events: Event[];

  @CreateDateColumn({ readonly: true })
  public createdAt!: Date;

  @UpdateDateColumn({ readonly: true })
  public updatedAt!: Date;
}
