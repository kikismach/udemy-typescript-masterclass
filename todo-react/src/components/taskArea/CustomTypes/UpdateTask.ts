import { Status } from '../../form/enums/Status';

export type UpdateTaskCommand = {
  id: string;
  data: UpdateTask;
};

export type UpdateTask = {
  status: Status;
};
