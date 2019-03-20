import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
