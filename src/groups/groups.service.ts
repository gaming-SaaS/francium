import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  static last_id: number;

  constructor(
    @Inject(REPOSITORY.USER)
    private groupRepository: Repository<Group>) {
    this.init();
  }

  async init() {
    GroupsService.last_id = (await this.groupRepository.find()).pop().id + 1;
  }

  async create(createGroupInput: CreateGroupInput) {
    const group: Group = new Group(createGroupInput);
    group.id = GroupsService.last_id;
    const data = await this.groupRepository.save(group);
    GroupsService.last_id++;
    return data;
  }

  async findAll() {
    const data = await this.groupRepository.find();
    return data;
  }

  async findOne(id: number) {
    const data = await this.groupRepository.find({
      where: {
        id: id,
      },
    });
    return data[0];
  }

  update(id: number, updateGroupInput: UpdateGroupInput) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
