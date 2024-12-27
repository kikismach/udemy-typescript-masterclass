import React from 'react';
import { Status } from '../../form/enums/Status';

export interface ITaskFooter {
  id: string;
  status?: Status;
  onChanged?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  onComplete?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
