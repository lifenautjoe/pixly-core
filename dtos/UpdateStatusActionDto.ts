import { IsNumber } from 'class-validator';

export class UpdateStatusActionDto {
  @IsNumber()
  public x: number;
  @IsNumber()
  public y: number;
}
