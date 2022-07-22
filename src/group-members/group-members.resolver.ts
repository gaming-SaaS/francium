import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupMembersService } from './group-members.service';
import { GroupMember } from './entities/group-member.entity';
import { CreateGroupMemberInput } from './dto/create-group-member.input';
import { UpdateGroupMemberInput } from './dto/update-group-member.input';

@Resolver(() => GroupMember)
export class GroupMembersResolver {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Mutation(() => GroupMember)
  createGroupMember(@Args('createGroupMemberInput') createGroupMemberInput: CreateGroupMemberInput) {
    return this.groupMembersService.create(createGroupMemberInput);
  }

  @Query(() => [GroupMember], { name: 'groupMembers' })
  findAll() {
    return this.groupMembersService.findAll();
  }

  @Query(() => GroupMember, { name: 'groupMember' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupMembersService.findOne(id);
  }

  @Mutation(() => GroupMember)
  updateGroupMember(@Args('updateGroupMemberInput') updateGroupMemberInput: UpdateGroupMemberInput) {
    return this.groupMembersService.update(updateGroupMemberInput.id, updateGroupMemberInput);
  }

  @Mutation(() => GroupMember)
  removeGroupMember(@Args('id', { type: () => Int }) id: number) {
    return this.groupMembersService.remove(id);
  }
}
