import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  getUser(@Param('email') email: string) {
    return this.userService.getUser(email);
  }

  @Post()
  postUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
