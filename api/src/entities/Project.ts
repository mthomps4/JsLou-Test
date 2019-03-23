import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Event from './Event';
import Speaker from './Speaker';

@Entity()
export default class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ type: 'varchar[]', nullable: true })
  repos: string[];

  @ManyToOne(type => Speaker, speaker => speaker.projects)
  contacts: Speaker[];

  @ManyToOne(type => Event, event => event.project)
  events: Event[];

  @CreateDateColumn({ readonly: true })
  public createdAt!: Date;

  @UpdateDateColumn({ readonly: true })
  public updatedAt!: Date;
}
