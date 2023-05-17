import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      '🚀 ~ file: index.ts:14 ~ JoiValidationPipe ~ transform ~ metadata:',
      metadata,
    );
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed in reqest');
    }
    return value;
  }
}
