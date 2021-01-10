import { IsString } from 'class-validator';

class Message {
  @IsString()
  public text: string;
}
