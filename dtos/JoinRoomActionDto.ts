import { IsString, Length } from 'class-validator';

export class JoinRoomActionDto {
  @IsString()
  @Length(1, 32)
  public roomName: string;
}
