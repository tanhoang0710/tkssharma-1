import { Injectable } from '@nestjs/common';
import { Task } from './interface/task';
import { TaskStoreService } from './task-store.service';

@Injectable()
export class TaskService {
  constructor(private readonly taskStoreService: TaskStoreService) {}

  public async addTask(task: Task): Promise<Task> {
    task.id = Math.floor(Math.random() * 50).toString();
    task.completed = false;
    (task.description = 'dummy'), (task.duration = 2);
    return this.taskStoreService.addTask(task);
  }

  public async getTask(id: string): Promise<Task> {
    return this.taskStoreService.getTask(id);
  }

  public async deleteTask(id: string): Promise<Task[]> {
    return this.taskStoreService.deleteTask(id);
  }

  public async getAllTask(): Promise<Task[]> {
    return this.taskStoreService.getAllTasks();
  }
}
