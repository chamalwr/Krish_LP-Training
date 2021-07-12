import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdatePetDto {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field()
    name: string;

    @Field(() => Int)
    age: number;
    
    @Field()
    breed: string;
    
    @Field()
    type: string;
    
    @Field()
    ownerId: string;
}