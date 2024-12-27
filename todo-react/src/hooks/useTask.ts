import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { sendApiRequest } from '../utils/sendApiRequest';
import { API_BASE_URL, QUERY_KEYS } from '../utils/constants';
import { CreateTask } from '../components/taskArea/CustomTypes/CreateTask';
import { Task } from '../models/task';
import {
  UpdateTask,
  UpdateTaskCommand,
} from '../components/taskArea/CustomTypes/UpdateTask';
import { Status } from '../components/form/enums/Status';

export interface IUseTask {
  getTasks: () => Promise<Task[]>;
  createTaskMutation: UseMutationResult<CreateTask, Error, CreateTask, unknown>;
  updateTaskMutation: UseMutationResult<
    UpdateTask,
    Error,
    UpdateTaskCommand,
    unknown
  >;
  countTasksByStatus: (status: Status) => number;
}

export default function useTask(): IUseTask {
  const BASE_URL = `${API_BASE_URL}/tasks`;
  const queryClient = useQueryClient();

  const sortData = (data: Task[]) => {
    try {
      console.log('sortData');
      const sortedData = data.sort(
        (a, b) => new Date(a.duedate).getTime() - new Date(b.duedate).getTime(),
      );
      console.log(sortedData);
      return sortedData;
    } catch (err) {
      console.log(err);
      console.log(typeof data[0].duedate);
      console.log(data[0].duedate);
      console.log(data[0].duedate.getTime());
      return data;
    }
  };

  const getTasks = (): Promise<Task[]> => {
    return sendApiRequest<Task[]>(BASE_URL, 'GET');
  };

  const createTaskMutation = useMutation({
    mutationFn: (data: CreateTask) =>
      sendApiRequest<Task>(BASE_URL, 'POST', data),
    onSuccess(data) {
      queryClient.setQueryData([QUERY_KEYS.TASKS], (tasks: Task[]) => {
        tasks.push({ ...data } as Task);
        return sortData(tasks);
      });
    },
  });

  const handleUpdateTask = ({ id, data }: UpdateTaskCommand) => {
    return sendApiRequest<Task>(`${BASE_URL}/${id}/status`, 'PUT', data);
  };

  const updateTaskMutation = useMutation({
    mutationFn: handleUpdateTask,
    onSuccess(data, { id }) {
      queryClient.setQueryData([QUERY_KEYS.TASKS], (tasks: Task[]) => {
        if (!tasks) return [data];

        let task = tasks.find((item) => item.id == id);
        if (task) {
          const index = tasks.indexOf(task);
          tasks[index] = { ...data };
        }
        return sortData(tasks);
      });
    },
  });

  const countTasksByStatus = (status: Status): number => {
    const data = queryClient.getQueryData<Task[]>([QUERY_KEYS.TASKS]);
    return data?.filter((item) => item.status === status).length ?? 0;
  };

  return {
    getTasks,
    createTaskMutation,
    updateTaskMutation,
    countTasksByStatus,
  };
}
