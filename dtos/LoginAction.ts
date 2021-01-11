import { IsString } from 'class-validator';

export class LoginAction {
  @IsString()
  public userName: string;

  @IsString()
  public userAvatar: string;
}
