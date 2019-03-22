import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Event from './Event';

@Entity()
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  line1: string;

  @Column()
  line2: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ type: 'int' })
  zip: number;

  @ManyToOne(type => Event, event => event.location)
  events: Event[];
}
