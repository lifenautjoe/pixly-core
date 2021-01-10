import { Room } from '../Room';
import { ValidateNested } from 'class-validator';

export class RoomUpdateEvent {
  @ValidateNested()
  status: Room;
}
