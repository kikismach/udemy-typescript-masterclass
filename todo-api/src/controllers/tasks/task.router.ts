import { Router, Request, Response } from 'express';
import { taskController } from './task.controller';
import { createValidator, updateStatusValidator } from './task.validator';

// Fire the router function
export const tasksRouter: Router = Router();

tasksRouter.get('/greeting', async (req: Request, res: Response) => {
  return res.json('Hellooooouuu').status(200);
});

// Get All
tasksRouter.get('/', taskController.getAll);

// Create
tasksRouter.post('/', createValidator, taskController.create);

// Update Status
tasksRouter.put('/:id/status', updateStatusValidator, taskController.update);
