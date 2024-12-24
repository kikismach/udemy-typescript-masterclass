import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

export interface ISelectItem {
  text: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  items?: ISelectItem[];
  onChange?: (event: SelectChangeEvent) => void;
}
