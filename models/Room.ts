import { ValidateNested } from 'class-validator';
import { User } from './User';

export class Room {
  @ValidateNested()
  users: User[];
}
