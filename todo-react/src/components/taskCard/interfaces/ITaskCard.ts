import { Priority } from '../../form/enums/Priority';
import { Status } from '../../form/enums/Status';
import { ITaskContent } from './ITaskContent';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITaskCard extends ITaskHeader, ITaskContent, ITaskFooter {
  id: string;
  priority?: Priority;
  status?: Status;
}
