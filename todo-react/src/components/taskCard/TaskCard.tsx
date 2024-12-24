import { Box } from '@mui/material';
import { FC, ReactElement } from 'react';
import { TaskHeader } from './sections/taskHeader';
import { TaskContent } from './sections/taskContent';
import { TaskFooter } from './sections/taskFooter';
import { emitCorrectBorderColor } from './helpers/EmitCorrectBorderColor';
import { ITaskCard } from './interfaces/ITaskCard';
import { Status } from '../form/enums/Status';
import { Priority } from '../form/enums/Priority';
import PropTypes from 'prop-types';

export const TaskCard: FC<ITaskCard> = (props): ReactElement => {
  const {
    priority = Priority.normal,
    // status = Status.completed,
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    onChanged,
    onComplete,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      rowGap={2}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: emitCorrectBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date}></TaskHeader>
      <TaskContent description={description}></TaskContent>
      <TaskFooter onChanged={onChanged} onComplete={onComplete}></TaskFooter>
    </Box>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string,
  priority: PropTypes.oneOf([Priority.high, Priority.normal, Priority.low]),
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onChanged: PropTypes.func,
  onComplete: PropTypes.func,
};
