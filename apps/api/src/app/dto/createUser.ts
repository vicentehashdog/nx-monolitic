import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}