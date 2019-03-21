import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Speaker from './Speaker';

@Entity()
export default class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Speaker, speaker => speaker.events)
  speaker: Speaker;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  // datetime: DateTime!
  // location: String! @default (value: "TEKsystems - 700 Room - First Floor")
  //   address: String! @default (value: "700 N Hurstbourne Pkwy Suite 250, Louisville, KY 40222")
  //   meetupUrl: String
  // extraLinks: [String]
  // organizer: User!
  // project: Project @relation(name: "ProjectForEvent")
  // speaker: Speaker @relation(name: "EventsForSpeaker")
}
