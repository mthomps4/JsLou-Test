import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Event from './Event';

export enum States {
  KY,
  TN,
  OH,
  IN
}

@Entity()
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ unique: true })
  line1: string;

  @Column({ nullable: true })
  line2: string;

  @Column({ nullable: true })
  city: string;

  @Column({
    type: 'enum',
    enum: States,
    default: States.KY
  })
  state: string;

  @Column({ type: 'int' })
  zip: number;

  @ManyToOne(type => Event, event => event.location)
  events: Event[];
}
