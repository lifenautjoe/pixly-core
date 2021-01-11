import { IsString } from 'class-validator';

export class SendMessageActionDto {
  @IsString()
  public messageText: string;
}
