import { IsNumber } from 'class-validator';

export class UserStatus {
  @IsNumber()
  public x: string;

  @IsNumber()
  public y: string;
}
