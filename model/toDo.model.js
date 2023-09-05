import { readJSON } from '../utils/readJson.js';
import crypto from 'node:crypto';
const tasks = readJSON('../Json/task.json');

export class ToDoModel {
	static async getAll() {
		return tasks;
	}

	static async getByID(id) {
		const task = tasks.find(t=> t.id === id.id);
		if (task) return task;
		return false;
	}

	static async createTask(input) {
		const task = {
			id: crypto.randomUUID(),
			...input,
		};
		tasks.push(task);
		return task;
	}

	static async updateTask({id, input}) {
		const taskIndex = tasks.findIndex(t=> t.id === id.id);
		const task = {
			...tasks[taskIndex],
			...input
		};
		tasks[taskIndex] = task;
		return task;
	}

	static async deleteTask({id}) {
		const taskIndex = tasks.findIndex(t=> t.id === id.id);
		tasks.splice(taskIndex, 1);	
		return 'Task was deleted';
	}
}