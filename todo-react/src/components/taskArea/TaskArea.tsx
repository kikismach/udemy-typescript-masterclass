import { Box, Grid2, Typography, Alert, LinearProgress } from '@mui/material';
import { FC, ReactElement, useMemo } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { TaskCard } from '../taskCard/TaskCard';
import { useTodoContext } from '../../contexts/todoContext';
import { Status } from '../form/enums/Status';
import { UpdateTaskCommand } from './CustomTypes/UpdateTask';

export const TaskArea: FC = (): ReactElement => {
  const { taskQuery, useTask } = useTodoContext();
  const { error, data, isLoading } = taskQuery;
  const { updateTaskMutation, countTasksByStatus } = useTask;

  const taskData = useMemo(() => {
    const filteredData =
      data?.filter((item) => item.status !== Status.completed) ?? [];
    return [...filteredData];
  }, [taskQuery]);

  const countTodo = useMemo(() => {
    return countTasksByStatus(Status.todo);
  }, [taskQuery]);

  const countInProgress = useMemo(() => {
    return countTasksByStatus(Status.inProgress);
  }, [taskQuery]);

  const countCompleted = useMemo(() => {
    return countTasksByStatus(Status.completed);
  }, [taskQuery]);

  const hasData = useMemo(() => {
    return !!taskQuery.data && taskQuery.data.length > 0;
  }, [taskQuery]);

  const handleUpdateStatus = (id: string, status: Status) => {
    const command: UpdateTaskCommand = {
      id,
      data: {
        status,
      },
    };
    updateTaskMutation.mutate(command);
  };

  const handleOnChange = (id: string, checked: boolean) => {
    const status: Status = !checked ? Status.todo : Status.inProgress;
    handleUpdateStatus(id, status);
  };

  const handleOnComplete = (id: string) => {
    handleUpdateStatus(id, Status.completed);
  };

  return (
    <Grid2 size={8} px={4}>
      <Box mb={8} px={4}>
        <Typography variant="h6">
          Status of Your Tasks As On {format(new Date(), 'PPPP')}
        </Typography>
      </Box>
      <Grid2
        container
        display="flex"
        justifyContent="center"
        flexDirection="column"
        columns={12}
        offset={{ md: 1, xs: 0 }}
        size={{ md: 10, xs: 12 }}
      >
        <Grid2
          size="grow"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          columns={{ md: 8, xs: 12 }}
          mb={8}
        >
          <TaskCounter count={countTodo} status={Status.todo}></TaskCounter>
          <TaskCounter
            count={countInProgress}
            status={Status.inProgress}
          ></TaskCounter>
          <TaskCounter
            count={countCompleted}
            status={Status.completed}
          ></TaskCounter>
        </Grid2>
        <Grid2
          size="grow"
          display="flex"
          flexDirection="column"
          columns={{ md: 8, xs: 10 }}
          rowGap={4}
        >
          {error && (
            <Alert severity="error">
              There was an error fetching your tasks.
            </Alert>
          )}

          {!error && !hasData && (
            <Alert severity="warning">
              You do not have any tasks created yet. Start by creating some
              tasks.
            </Alert>
          )}

          {isLoading && <LinearProgress />}

          {hasData &&
            taskData.map((item, index) => {
              return (
                <TaskCard
                  key={`${index}-${item.id}`}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.duedate}
                  status={item.status}
                  priority={item.priority}
                  onChanged={(_, checked) => {
                    handleOnChange(item.id, checked);
                  }}
                  onComplete={(e) => {
                    handleOnComplete(item.id);
                  }}
                />
              );
            })}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
