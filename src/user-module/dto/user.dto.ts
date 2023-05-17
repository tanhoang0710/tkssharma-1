import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsString()
  @IsDefined()
  email: string;

  @IsDefined()
  @IsString()
  username: string;
}

export class UserParamDto {
  @IsEmail()
  @IsString()
  @IsDefined()
  email: string;
}
