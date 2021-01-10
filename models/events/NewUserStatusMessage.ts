import { IsString } from 'class-validator';

export class NewRoomStatusMessage {
  @IsString()
  public room: string;

  @IsString()
  public name: string;

  @IsString()
  public avatar: string;
}
