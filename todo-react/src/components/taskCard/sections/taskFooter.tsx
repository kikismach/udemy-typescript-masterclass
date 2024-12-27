import { Button, FormControlLabel, Grid2, Switch } from '@mui/material';
import { FC, ReactElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ITaskFooter } from '../interfaces/ITaskFooter';
import { DoneOutline } from '@mui/icons-material';
import { Status } from '../../form/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    status = Status.todo,
    onChanged = (e) => console.error(e),
    onComplete = (e) => console.error(e),
  } = props;

  const isChecked = useMemo(() => {
    return status === Status.inProgress;
  }, [status]);

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
        control={
          <Switch checked={isChecked} onChange={onChanged} color="warning" />
        }
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
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
  onChanged: PropTypes.func,
  onComplete: PropTypes.func,
};
