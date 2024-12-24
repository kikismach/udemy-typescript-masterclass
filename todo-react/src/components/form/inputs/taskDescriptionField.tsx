import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITextField } from '../interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.error(e), disabled = false } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      required
      fullWidth
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
