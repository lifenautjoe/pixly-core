import { PixlyProtocol } from "./../protocol";
import { IsIn, IsString, Length } from "class-validator";

export class AuthenticateActionDto {
  @IsString()
  @Length(1, 32)
  public name: string;

  @IsString()
  @IsIn(Object.values(PixlyProtocol.avatars))
  public avatar: string;
}
