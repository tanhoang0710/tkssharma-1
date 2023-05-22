import { IsDefined, IsEmail, IsMongoId } from 'class-validator';

export class CreateCustomerDto {
  readonly first_name: string;
  readonly last_name: string;

  @IsDefined()
  @IsEmail()
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly description: string;
}

export class DeleteCustomerDto {
  @IsMongoId()
  id: string;
}
