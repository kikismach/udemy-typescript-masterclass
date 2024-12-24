import {
  DateValidationError,
  PickerChangeHandlerContext,
} from '@mui/x-date-pickers';
import { IDisabled } from './IDisabled';
import { Dayjs } from 'dayjs';

export interface IDateField extends IDisabled {
  value?: Dayjs | null;
  onChange?: (
    value: Dayjs | null,
    context: PickerChangeHandlerContext<DateValidationError>,
  ) => void;
}
