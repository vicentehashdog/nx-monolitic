import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
