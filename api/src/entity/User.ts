import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.VIEWER
  })
  role: UserRole;

  @Column('text')
  bio: string;
  @Column()
  github: string;
  @Column()
  twitter: string;
  @Column()
  website: string;
}

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

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  // datetime: DateTime!
  // location: String! @default (value: "TEKsystems - 700 Room - First Floor")
  //   address: String! @default (value: "700 N Hurstbourne Pkwy Suite 250, Louisville, KY 40222")
  //   meetupUrl: String
  // extraLinks: [String]
  // organizer: User!
  // project: Project @relation(name: "ProjectForEvent")
  // speaker: Speaker @relation(name: "EventsForSpeaker")
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  //     description: String!
  // repo: String!
  // contacts: [String]
  // events: [Event] @relation(name: "ProjectForEvent")
}
