import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroupInput {
  @Field(() => String)
  fullname: string;
}
