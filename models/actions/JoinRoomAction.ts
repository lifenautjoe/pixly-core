import { IsString } from 'class-validator';

export class JoinRoomAction {
  @IsString()
  public roomName: string;
}
