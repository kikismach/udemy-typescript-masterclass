import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Priority } from '../../enums/Priority';
import { Status } from '../../enums/Status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    default: 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Column({
    type: 'nvarchar',
    nullable: false,
    length: 300,
  })
  title: string;

  @Column({
    type: 'longtext',
    nullable: false,
  })
  description: string;

  @CreateDateColumn({
    type: 'datetime',
    nullable: false,
  })
  duedate: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority;
}
