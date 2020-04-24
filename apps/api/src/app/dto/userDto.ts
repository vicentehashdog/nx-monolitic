import { IsNotEmpty, IsEmail, IsOptional, IsNumber } from 'class-validator';
import { UserInterface } from '@nex-test/data';

export class UserDTO implements UserInterface {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}