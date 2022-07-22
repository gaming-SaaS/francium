import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REPOSITORY } from '../constants';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  static last_id: number;

  constructor(
    @Inject(REPOSITORY.USER)
    private userRepository: Repository<User>) {
    this.init();
  }

  async init() {
    UsersService.last_id = (await this.userRepository.find()).pop().id + 1;
  }

  async create(createUserInput: CreateUserInput) {
    const user: User = new User(createUserInput);
    user.id = UsersService.last_id;
    const data = await this.userRepository.save(user);
    UsersService.last_id++;
    return data;
  }

  async findAll() {
    const data = await this.userRepository.find();


    return data;
  }

  async findOne(id: number) {
    const data = await this.userRepository.find({
      where: {
        id: id,
      },
    });


    return data[0];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
