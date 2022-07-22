import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as UUID } from 'uuid';
import { CreateGroupInput } from '../dto/create-group.input';
import { UpdateGroupInput } from '../dto/update-group.input';

@ObjectType()
@Entity({ name: 'groups' })
export class Group {
  constructor(group: CreateGroupInput | UpdateGroupInput) {
    if (group) {
      this.fullname = group.fullname;
      this.uuid = UUID();
    }
  }

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('text')
  fullname: string;

  @Field(() => String)
  @Column('text')
  uuid: string;
}
