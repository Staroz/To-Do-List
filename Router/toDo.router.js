import { Router } from 'express';
import { ToDoController } from '../controller/toDo.controller.js';

export const toDoRouter = Router();

toDoRouter.get('/', ToDoController.getAll);

// get by ID
toDoRouter.get('/:id', ToDoController.getById);

// post

toDoRouter.post('/', ToDoController.createTask);
//patch by ID

toDoRouter.patch('/:id', ToDoController.updateTask);

// delete by id

toDoRouter.delete('/:id', ToDoController.deleteTask);

