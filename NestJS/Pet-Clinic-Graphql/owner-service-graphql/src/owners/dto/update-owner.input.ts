import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field(() =>  String)
  _id: MongooseSchema.Types.ObjectId;

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
