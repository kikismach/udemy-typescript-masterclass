import { Grid2 } from '@mui/material';
import { FC, ReactElement } from 'react';
import { Profile } from '../profile/Profile';
import { CreateTaskForm } from '../form/CreateTaskForm';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid2
      size={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        backgroundColor: 'background.paper',
        flexDirection: 'column',
        justifyItems: 'center',
        alignContent: 'center',
      }}
    >
      <Profile name="Ricardo" />
      <CreateTaskForm></CreateTaskForm>
    </Grid2>
  );
};
