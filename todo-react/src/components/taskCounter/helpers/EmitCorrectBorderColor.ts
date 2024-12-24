import { Status } from '../../form/enums/Status';

export const emitCorrectBorderColor = (status: Status): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
    default:
      return 'grey.800';
  }
};
