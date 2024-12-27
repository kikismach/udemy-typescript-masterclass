import { Priority } from '../components/form/enums/Priority';
import { Status } from '../components/form/enums/Status';

export type Task = {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  duedate: Date;
  status: Status;
  priority: Priority;
};
