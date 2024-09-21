import { Request, Response, NextFunction } from "express";
import Task from "../models/taskModels";
import { asyncWrapper } from "../middleware/async";
import { createCustomError } from "../errors/customError";

export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
export const getAllTask = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`task with id ${taskID} not found`, 404));
    }
    res.status(200).json({ task });
  }
);

export const deletTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`task with id ${taskID} not found`, 404));
    }
    res.status(202).json({ task });
  }
);

export const updateTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(createCustomError(`task with id ${taskID} not found`, 404));
    }
    res.status(202).json({ task });
  }
);
