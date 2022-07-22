import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REPOSITORY } from '../constants';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(REPOSITORY.USER)
    private userRepository: Repository<User>) { }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findAll() {
    const data = await this.userRepository.find();


    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
