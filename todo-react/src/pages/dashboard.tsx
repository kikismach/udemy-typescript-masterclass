import { FC, ReactElement } from 'react';
import { Grid2 } from '@mui/material';
import { Sidebar } from '../components/sidebar/SideBar';
import { TaskArea } from '../components/taskArea/TaskArea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid2
      container
      spacing={2}
      p={0}
      m={0}
      sx={{
        height: '100vh',
      }}
    >
      <TaskArea />
      <Sidebar />
    </Grid2>
  );
};
