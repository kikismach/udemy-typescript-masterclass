import { FC, ReactElement } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IDateField } from '../interfaces/IDateField';
import PropTypes from 'prop-types';
import dayjs, { Dayjs } from 'dayjs';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = dayjs(new Date()),
    onChange = (e) => console.error(e),
    disabled = false,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Task Date"
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
  value: PropTypes.instanceOf(Dayjs),
  disabled: PropTypes.bool,
};
