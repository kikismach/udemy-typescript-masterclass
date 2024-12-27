import { FC, ReactElement } from 'react';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IDateField } from '../interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = null,
    onChange = (e) => console.error(e),
    disabled = false,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Task Due Date"
        format="DD/MM/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
};
