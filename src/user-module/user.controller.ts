import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamDto } from './dto/user.dto';
import { HttpExceptionFilter } from './filters';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  @UseFilters(new HttpExceptionFilter())
  async getUser(@Param() params: UserParamDto): Promise<User> {
    try {
      return await this.userService.getUser(params.email);
    } catch (err) {
      throw new BadRequestException('test');
    }
  }

  @Post()
  // @UsePipes(new JoiValidationPipe(UserSchema))
  postUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  deleteUser(@Param() params: UserParamDto) {
    return this.userService.deleteUser(params.email);
  }
}
