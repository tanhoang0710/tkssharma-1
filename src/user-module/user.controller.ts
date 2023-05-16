import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getHelloUser(): string {
    return 'Hello user';
  }
}
