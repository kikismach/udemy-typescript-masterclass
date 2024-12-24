import { Button, FormControlLabel, Grid2, Switch } from '@mui/material';
import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ITaskFooter } from '../interfaces/ITaskFooter';
import { DoneOutline } from '@mui/icons-material';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onChanged = (e) => console.error(e),
    onComplete = (e) => console.error(e),
  } = props;

  return (
    <Grid2
      container
      display="flex"
      justifyContent="space-between"
      size="grow"
      columnGap="10px"
      wrap="nowrap"
    >
      <FormControlLabel
        control={<Switch onChange={onChanged} color="warning" />}
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: 'white',
        }}
        endIcon={<DoneOutline />}
        onClick={onComplete}
      >
        Mark Complete
      </Button>
    </Grid2>
  );
};

TaskFooter.propTypes = {
  onChanged: PropTypes.func,
  onComplete: PropTypes.func,
};
