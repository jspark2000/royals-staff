import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class AlterPositionRequestDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsString()
  offPosition: string;

  @IsString()
  defPosition: string;

  @IsString()
  splPosition: string;
}
