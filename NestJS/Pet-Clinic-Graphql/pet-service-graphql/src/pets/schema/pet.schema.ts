import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
@ObjectType()
export class Pet {

    @Prop()
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field(() => Int)
    age: number;

    @Prop()
    @Field()
    breed: string;

    @Prop()
    @Field()
    type: string;

    @Prop()
    @Field()
    registeredDateTime: Date;

    @Prop()
    @Field()
    ownerId: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);