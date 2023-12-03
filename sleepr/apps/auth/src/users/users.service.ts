import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dt';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this, this.usersRepository.create(createUserDto);
  }
}
