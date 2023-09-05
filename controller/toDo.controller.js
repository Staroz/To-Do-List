import { ToDoModel } from '../model/toDo.model.js';
import { validatePartialBody } from '../schema/validateData.js';

export class ToDoController {
	static async getAll (req, res) {
		const task = await ToDoModel.getAll();
		res.status(200).json(task);
	}

	static async getById (req, res) {
		const task = await ToDoModel.getByID(req.params);
		if (task) return res.status(200).json(task);
		res.status(400).send('<h1>ID NOT FOUNDED</h1>');
	}

	static async createTask (req, res) {
		const result = validatePartialBody(req.body);
		if (!result.success) return res.status(400).json({error: JSON.parse(result.error.message)});
		const task = await ToDoModel.createTask(result.data);
		res.json(task);
	} 

	static async updateTask (req, res) {
		const confirmId = await ToDoModel.getByID(req.params);
		if (!confirmId) return res.status(400).send('<h1>ID NOT FOUNDED</h1>');
		const result = validatePartialBody(req.body);
		if (!result.success) return res.status(400).json({error: JSON.parse(result.error.message)});
		const task = await ToDoModel.updateTask({id: req.params, input: result.data});
		res.status(200).json(task);
	}

	static async deleteTask (req, res) {
		const confirmId = await ToDoModel.getByID(req.params);
		if (!confirmId) return res.status(400).send('<h1>ID NOT FOUNDED</h1>');
		const task = await ToDoModel.deleteTask({id: req.params});
		res.json(task);
	}
}