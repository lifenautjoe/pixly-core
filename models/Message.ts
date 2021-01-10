import { IsString } from 'class-validator';

export class Message {
  @IsString()
  public text: string;
}
