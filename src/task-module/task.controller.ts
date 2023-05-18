import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Post()
  async createTask(@Body() createTaskDto: TaskDto) {
    const data = this.taskService.addTask(createTaskDto);
    return data;
  }
}
