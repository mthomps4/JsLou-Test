import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Column()
  email: string;

  @Column('text')
  bio: string;

  @Column()
  github: string;

  @Column()
  twitter: string;

  @Column()
  website: string;

  @Column('simple-array')
  extraLinks: string[];
  // events: [Event] @relation(name: "EventsForSpeaker")
}
