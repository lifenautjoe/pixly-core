import { Message } from '../Message';
import { ValidateNested } from 'class-validator';

export class NewMessageEvent {
  @ValidateNested()
  public message: Message;
}
