import { IsBoolean, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class TaskDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class TaskParamDto {
  @IsString()
  @IsDefined()
  id: string;
}

export class QueryParamDto {
  @IsDefined()
  @IsBoolean()
  filter: boolean;
}
