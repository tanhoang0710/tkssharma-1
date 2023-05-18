import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamDto } from './dto/user.dto';
import { AuthGuard } from './guard/index.guard';
import { Roles } from './guard/roles.decorator';
import { LoggingInterceptor } from './interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  @UseGuards(AuthGuard)
  @Roles('admin')
  // @UseFilters(new HttpExceptionFilter())
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
