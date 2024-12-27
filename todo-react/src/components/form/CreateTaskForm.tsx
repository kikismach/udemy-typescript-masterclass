import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  LinearProgress,
  Alert,
  AlertTitle,
} from '@mui/material';
import { TaskTitleField } from './inputs/taskTitleField';
import { TaskDescriptionField } from './inputs/taskDescriptionField';
import { TaskDateField } from './inputs/taskDateField';
import { TaskSelectField } from './inputs/taskSelectField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { ISelectItem } from './interfaces/ISelectField';
import { Dayjs } from 'dayjs';
import { CreateTask } from '../taskArea/CustomTypes/CreateTask';
import { useTodoContext } from '../../contexts/todoContext';

export const CreateTaskForm: FC = (): ReactElement => {
  type enumType = { [key: string]: string | number };

  const { useTask } = useTodoContext();
  const { createTaskMutation } = useTask;

  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<Status>(Status.todo);
  const [priority, setPriority] = useState<Priority>(Priority.normal);
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const isLoading = useMemo((): boolean => {
    return createTaskMutation.isPending;
  }, [createTaskMutation.status]);

  const getEnumItems = <T extends enumType>(
    item: T,
    uppercaseText: boolean = true,
  ): ISelectItem[] => {
    return Object.keys(item).map((key) => {
      return {
        text: uppercaseText ? key.toUpperCase() : key,
        value: item[key],
      } as ISelectItem;
    });
  };

  const handleCreateButton = () => {
    if (!title || !description || !dueDate) {
      return;
    }

    const taskData: CreateTask = {
      title,
      description,
      duedate: dueDate.toDate(),
      status,
      priority,
    };
    createTaskMutation.mutate(taskData);
  };

  const disableButton = useMemo((): boolean => {
    return (
      !title ||
      !description ||
      !dueDate ||
      !status ||
      !priority ||
      isLoading ||
      showSuccessMsg
    );
  }, [
    title,
    description,
    dueDate,
    status,
    priority,
    isLoading,
    showSuccessMsg,
  ]);

  useEffect(() => {
    if (!createTaskMutation.isSuccess) {
      setShowSuccessMsg(false);
      return;
    }

    setShowSuccessMsg(true);
    const successTimeOut = setTimeout(() => {
      setShowSuccessMsg(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeOut);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      }}
      px={4}
      my={6}
    >
      {showSuccessMsg && (
        <Alert
          severity="success"
          sx={{
            width: '100%',
            marginBottom: '16px',
          }}
        >
          <AlertTitle>Success</AlertTitle>
          The task has been created sucessfully
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack
        sx={{
          width: '100%',
        }}
        spacing={2}
      >
        <TaskTitleField
          disabled={isLoading}
          onChange={(e) => setTitle(e.target.value)}
        ></TaskTitleField>
        <TaskDescriptionField
          disabled={isLoading}
          onChange={(e) => setDescription(e.target.value)}
        ></TaskDescriptionField>
        <TaskDateField
          disabled={isLoading}
          value={dueDate}
          onChange={(newDate) => setDueDate(newDate)}
        ></TaskDateField>
        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            name="status"
            label="Status"
            items={getEnumItems(Status)}
            disabled={isLoading}
            value={status}
            onChange={(e) => {
              const value: Status = e.target.value as Status;
              setStatus(value);
            }}
          ></TaskSelectField>
          <TaskSelectField
            name="priority"
            label="Priority"
            items={getEnumItems(Priority, false)}
            disabled={isLoading}
            value={priority}
            onChange={(e) => {
              const value: Priority = e.target.value as Priority;
              setPriority(value);
            }}
          ></TaskSelectField>
        </Stack>

        {isLoading && <LinearProgress />}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleCreateButton}
          disabled={disableButton}
        >
          Create a Task Button
        </Button>
      </Stack>
    </Box>
  );
};
