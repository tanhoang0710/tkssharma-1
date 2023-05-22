import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { QueryParamDto, TaskDto, TaskParamDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTask();
  }

  @Get('/filter')
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true }))
  async filterTaskById(@Query() query: QueryParamDto) {
    console.log(
      '🚀 ~ file: task.controller.ts:42 ~ TaskController ~ filterTaskById ~ param.filter:',
      query.filter,
    );
    return await this.taskService.filterTaskById(query.filter ? '1' : '2');
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
