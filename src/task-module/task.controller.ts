import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }
}
