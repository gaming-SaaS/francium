import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroupMemberInput {
  @Field(() => String)
  uuid: string;
  @Field(() => String)
  entity_identifier: string;
}
