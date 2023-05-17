import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  @UsePipes(new ValidationPipe())
  getUser(@Param() params: UserParamDto) {
    return this.userService.getUser(params.email);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  @UsePipes(new ValidationPipe())
  deleteUser(@Param() params: UserParamDto) {
    return this.userService.deleteUser(params.email);
  }
}
