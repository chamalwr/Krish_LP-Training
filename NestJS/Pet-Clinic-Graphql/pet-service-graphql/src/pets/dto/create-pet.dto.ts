import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreatePetDto{
    @Field()
    name: string;

    @Field()
    age: number;
    
    @Field()
    breed: string;
    
    @Field()
    type: string;
    
    @Field()
    ownerId: string;
}