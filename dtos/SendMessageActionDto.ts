import { IsDefined, IsString } from "class-validator";

export class SendMessageActionDto {
  @IsString()
  @IsDefined()
  public text: string;
}
