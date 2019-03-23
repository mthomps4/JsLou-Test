import { Column, Index } from 'typeorm';

export default abstract class ProfileDetails {
  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Index({ unique: true })
  @Column({ unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  website: string;

  @Column('simple-array', { nullable: true })
  extraLinks: string[];
}
