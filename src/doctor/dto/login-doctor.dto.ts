import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDoctorDto {
  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  contrasenia: string;
}
