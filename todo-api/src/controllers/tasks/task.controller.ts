import { Task } from '../../dbContext/Models/task';
import { instanceToPlain } from 'class-transformer';
import { AppDataSource } from '../../dbContext/appDbContext';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export class TaskController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[] = [];
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          duedate: 'ASC',
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
    allTasks = instanceToPlain(allTasks) as Task[];
    return res.json(allTasks).status(200);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let newTask: Task = { ...req.body };
      await AppDataSource.getRepository(Task).save(newTask);
      newTask = instanceToPlain(newTask) as Task;
      return res.json(newTask).status(201);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const taskRepository = AppDataSource.getRepository(Task);

      const oldTask: Task | null = await taskRepository.findOne({
        where: { id: req.params.id },
      });
      if (!oldTask) {
        return res.status(404).json({
          error: 'The Task does not exists',
        });
      }

      let updatedTask: Task = { ...oldTask, ...req.body };
      await taskRepository.save(updatedTask);

      updatedTask = instanceToPlain(updatedTask) as Task;
      return res.json(updatedTask).status(201);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export const taskController = new TaskController();
