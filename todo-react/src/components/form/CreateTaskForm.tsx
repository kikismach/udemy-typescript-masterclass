import { FC, ReactElement } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { TaskTitleField } from './inputs/taskTitleField';
import { TaskDescriptionField } from './inputs/taskDescriptionField';
import { TaskDateField } from './inputs/taskDateField';
import { TaskSelectField } from './inputs/taskSelectField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { ISelectItem } from './interfaces/ISelectField';

export const CreateTaskForm: FC = (): ReactElement => {
  const getEnumItems = <T extends { [key: string]: string | number }>(
    item: T,
    uppercaseText: boolean = true,
  ): ISelectItem[] => {
    return Object.keys(item).map((key, index) => {
      return {
        text: uppercaseText ? key.toUpperCase() : key,
        value: item[index],
      } as ISelectItem;
    });
  };

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
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack
        sx={{
          width: '100%',
        }}
        spacing={2}
      >
        <TaskTitleField></TaskTitleField>
        <TaskDescriptionField></TaskDescriptionField>
        <TaskDateField></TaskDateField>
        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            name="status"
            label="Status"
            items={getEnumItems(Status)}
          ></TaskSelectField>
          <TaskSelectField
            name="priority"
            label="Priority"
            items={getEnumItems(Priority, false)}
          ></TaskSelectField>
        </Stack>
        <Button>Create a Task Button</Button>
      </Stack>
    </Box>
  );
};
