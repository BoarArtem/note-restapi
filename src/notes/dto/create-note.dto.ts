/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty({ message: 'Это поле не может быть пустым' })
  title: string

  @IsString({ message: 'Приоритет должен быть строкой' })
  @Matches(/^(low|medium|high)$/, {
    message: 'Приоритет должен быть: low, medium или high',
  })
  priority: string;
}
