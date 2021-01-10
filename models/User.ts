import { IsString, ValidateNested } from 'class-validator';
import { UserStatus } from './UserStatus';

export class User {
  socketId: string;

  @IsString()
  public name: string;

  @IsString()
  public avatar: string;

  @ValidateNested()
  status: UserStatus;
}
