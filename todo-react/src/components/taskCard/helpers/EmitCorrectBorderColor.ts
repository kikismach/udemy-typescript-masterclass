import { Priority } from '../../form/enums/Priority';

export const emitCorrectBorderColor = (priority: Priority): string => {
  switch (priority) {
    case Priority.low:
      return 'info.light';
    case Priority.normal:
      return 'grey.900';
    case Priority.high:
      return 'error.light';
  }
};
