import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as UUID } from 'uuid';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  constructor(user: CreateUserInput | UpdateUserInput) {
    if (user) {
      this.username = user.username;
      this.fullname = user.fullname;
      this.secret_key = user.secret_key;
      this.uuid = UUID();
    }
  }

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('text')
  username: string;

  @Field(() => String)
  @Column('text')
  fullname: string;

  @Field(() => String)
  @Column('text')
  secret_key: string;

  @Field(() => String)
  @Column('text')
  uuid: string;

  @Column({ name: "created_at" })
  createdAt?: Date;
}