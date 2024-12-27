// archivo ContextoMiAplicacion.jsx
import React, { createContext, ReactNode, useContext, useState } from 'react';
import TaskQuery from '../querys/task.query';
import useTask, { IUseTask } from '../hooks/useTask';
import { UseQueryResult } from '@tanstack/react-query';
import { Task } from '../models/task';

interface IProviderProps {
  props: any;
  children: ReactNode;
}

interface ITodoContext {
  props: any;
  taskQuery: UseQueryResult<Task[], Error>;
  useTask: IUseTask;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoProvider is not declared in the app.');
  }
  return context;
};

const TodoProvider: React.FC<IProviderProps> = ({ props, children }) => {
  const useTasksInstance = useTask();
  const { getTasks } = useTasksInstance;
  const { taskQuery } = TaskQuery(getTasks);

  const providerValue: ITodoContext = {
    props,
    taskQuery,
    useTask: useTasksInstance,
  };

  return (
    <TodoContext.Provider value={providerValue}>
      <>{children}</>
    </TodoContext.Provider>
  );
};

export { TodoProvider, useTodoContext };
