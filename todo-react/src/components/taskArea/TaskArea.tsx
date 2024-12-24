import { Box, Grid2, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { TaskCard } from '../taskCard/TaskCard';

export const TaskArea: FC = (): ReactElement => {
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
          <TaskCounter></TaskCounter>
          <TaskCounter></TaskCounter>
          <TaskCounter></TaskCounter>
        </Grid2>
        <Grid2
          size="grow"
          display="flex"
          flexDirection="column"
          columns={{ md: 8, xs: 10 }}
          rowGap={4}
        >
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
