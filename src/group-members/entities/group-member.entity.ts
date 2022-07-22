import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateGroupMemberInput } from '../dto/create-group-member.input';
import { UpdateGroupMemberInput } from '../dto/update-group-member.input';

@ObjectType()
export class GroupMember {
  constructor(groupMember: CreateGroupMemberInput | UpdateGroupMemberInput) {
    if (groupMember) {
      this.uuid = groupMember.uuid;
      this.entity_identifier = groupMember.entity_identifier;
    }
  }
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('text')
  uuid: string;

  @Field(() => String)
  @Column('text')
  entity_identifier: string;
}
