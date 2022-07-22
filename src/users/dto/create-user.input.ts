import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username: string;
  @Field(() => String)
  fullname: string;
  @Field(() => String)
  secret_key: string;
}
