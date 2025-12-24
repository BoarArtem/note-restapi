import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty()
  @MaxLength(50, { message: 'Имя не должно превышать 50 символов' })
  name: string;

  @IsString({ message: 'Почта должна быть строкой' })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  email: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty()
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
  @MaxLength(128, { message: 'Пароль должен содержать не больше 128 символов' })
  password: string;
}
