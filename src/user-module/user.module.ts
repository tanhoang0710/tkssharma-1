import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from './middlewares';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({
      //   path: 'cats',
      //   method: RequestMethod.POST,
      // })
      .forRoutes({
        path: 'users',
        method: RequestMethod.POST,
      });

    // consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
