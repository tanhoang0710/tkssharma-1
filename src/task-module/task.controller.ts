import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { TaskDto, TaskParamDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTask();
  }

  @Get(':id')
  async getTaskById(@Param() params: TaskParamDto): Promise<Task> {
    return await this.taskService.getTask(params.id);
  }

  @Delete(':id')
  async deleteTaskById(@Param() params: TaskParamDto): Promise<Task[]> {
    return await this.taskService.deleteTask(params.id);
  }

  @Post()
  async createTask(@Body() createTaskDto: TaskDto) {
    const data = await this.taskService.addTask(createTaskDto);
    return data;
  }
}
