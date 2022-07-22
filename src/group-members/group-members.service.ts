import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateGroupMemberInput } from './dto/create-group-member.input';
import { UpdateGroupMemberInput } from './dto/update-group-member.input';
import { GroupMember } from './entities/group-member.entity';

@Injectable()
export class GroupMembersService {
  static last_id: number;

  constructor(
    @Inject(REPOSITORY.GROUP_MEMBER)
    private groupRepository: Repository<GroupMember>) {
    this.init();
  }

  async init() {
    GroupMembersService.last_id = (await this.groupRepository.find()).pop().id + 1;
  }

  async create(createGroupMemberInput: CreateGroupMemberInput) {
    const groupMember: GroupMember = new GroupMember(createGroupMemberInput);
    groupMember.id = GroupMembersService.last_id;
    const data = await this.groupRepository.save(groupMember);
    GroupMembersService.last_id++;
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


  update(id: number, updateGroupMemberInput: UpdateGroupMemberInput) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
