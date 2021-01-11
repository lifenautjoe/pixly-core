import { IsString, Length } from 'class-validator';

export class AuthenticateActionDto {
  @IsString()
  @Length(1, 32)
  public userName: string;
}
