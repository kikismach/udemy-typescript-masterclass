import { Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITaskContent } from '../interfaces/ITaskContent';
import PropTypes from 'prop-types';

export const TaskContent: FC<ITaskContent> = (props): ReactElement => {
  const { description = 'Lorem ipsum dolor sit amet' } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskContent.propTypes = {
  description: PropTypes.string,
};
