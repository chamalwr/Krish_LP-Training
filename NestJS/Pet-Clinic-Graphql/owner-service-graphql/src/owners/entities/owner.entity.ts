import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Owner {
    @Prop()
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    @Field()
    firstName: string;

    @Prop()
    @Field()
    lastName: string;

    @Prop()
    @Field()
    address: string;

    @Prop()
    @Field()
    zipCode: string;

    @Prop()
    @Field()
    contactNumber: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field()
    petIds: string;
}

export type OwnerDocument = Owner & Document;
export const OwnerSchema = SchemaFactory.createForClass(Owner);

