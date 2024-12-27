import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Task } from '../models/task';
import { QUERY_KEYS } from '../utils/constants';
import { useEffect, useState } from 'react';

interface ITaskQuery {
  taskQuery: UseQueryResult<Task[], Error>;
}

export default function TaskQuery(getTasks: () => Promise<Task[]>): ITaskQuery {
  const taskQuery = useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: getTasks,
    staleTime: Infinity,
  });

  return { taskQuery };
}
