import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27817/test_tkssharma')],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
