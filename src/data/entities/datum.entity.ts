import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Datum {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}
