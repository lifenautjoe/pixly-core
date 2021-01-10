import { IsString } from 'class-validator';

export class NewMessageEvent {
  @IsString()
  public room: string;

  @IsString()
  public name: string;

  @IsString()
  public avatar: string;
}
