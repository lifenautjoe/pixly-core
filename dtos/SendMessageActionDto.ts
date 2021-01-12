import { IsString } from "class-validator";

export class SendMessageActionDto {
  @IsString()
  public text: string;
}
