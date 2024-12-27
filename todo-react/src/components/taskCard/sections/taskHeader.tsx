import { Box, Chip, Grid2, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITaskHeader } from '../interfaces/ITaskHeader';
import { format } from 'date-fns';
//import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'Default Title', date = new Date() } = props;
  return (
    <Grid2
      container
      display="flex"
      justifyContent="space-between"
      size="grow"
      columnGap="10px"
      wrap="nowrap"
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PP')} />
      </Box>
    </Grid2>
  );
};

// TaskHeader.propTypes = {
//   title: PropTypes.string,
//   date: PropTypes.instanceOf(Date),
// };
