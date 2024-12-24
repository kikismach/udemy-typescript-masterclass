import { FC, ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ISelectField } from '../interfaces/ISelectField';
import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    name = 'status',
    label = 'Status',
    value = '',
    items = [{ text: 'Add Items', value: '' }],
    onChange = (event) => console.error(event),
    disabled = false,
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        required
        fullWidth
        size="small"
        labelId={name}
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => {
          return (
            <MenuItem key={item.value + index} value={item.value}>
              {item.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
