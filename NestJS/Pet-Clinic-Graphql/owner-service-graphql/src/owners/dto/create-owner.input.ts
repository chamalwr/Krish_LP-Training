import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field()
  zipCode: string;

  @Field()
  contactNumber: string;

  @Field()
  email: string;
  
  @Field()
  petIds: string;
}
