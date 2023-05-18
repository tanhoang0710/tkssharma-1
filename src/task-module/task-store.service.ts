import { Injectable } from '@nestjs/common';
import { Task } from './interface/task';

@Injectable()
export class TaskStoreService {
  public tasks: Task[] = [];

  public async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  public async getTask(id: string): Promise<Task> {
    const task = this.tasks.filter((task) => task.id === id);
    return this.tasks[0];
  }

  public async deleteTask(id: string): Promise<Task[]> {
    const newTasks = this.tasks.filter((task) => task.id !== id);
    this.tasks = [...newTasks];
    return this.tasks;
  }

  public async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }
}
