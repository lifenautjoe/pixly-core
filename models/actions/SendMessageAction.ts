import { IsString } from 'class-validator';

export class SendMessageAction {
  @IsString()
  public room: string;

  @IsString()
  public message: string;
}
