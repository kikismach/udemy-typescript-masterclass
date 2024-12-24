import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {
  const { name } = props;
  const letter = name.toUpperCase().substring(0, 1);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {letter}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, {name}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal taksks manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
