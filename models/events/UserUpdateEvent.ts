import { User } from '../User';
import { ValidateNested } from 'class-validator';

export class UserUpdateEvent {
  @ValidateNested()
  public user: User;
}
