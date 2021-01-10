import { IsString } from 'class-validator';

export class SendMessageAction {
  @IsString()
  public roomName: string;

  @IsString()
  public messageText: string;
}
