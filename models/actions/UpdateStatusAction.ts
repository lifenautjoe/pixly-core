import { IsNumber } from 'class-validator';

export class UpdateStatusAction {
  @IsNumber()
  public x: number;
  @IsNumber()
  public y: number;
}
