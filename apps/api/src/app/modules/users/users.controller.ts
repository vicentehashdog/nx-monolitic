import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../entity/user.entity';
import { CreateUser } from '../../dto/createUser';

@Controller('users')
export class UsersController {
  constructor(
    private usersServices: UsersService
  ){}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersServices.findAll();
  }

  @Post()
  save(@Body() userDto: CreateUser): Promise<User> {
    const _user = new User();

    _user.name = userDto.name;
    _user.email = userDto.email;

    return this.usersServices.save(_user);
  }
}
