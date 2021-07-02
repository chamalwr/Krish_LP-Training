import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export type PetDocument = Pet & Document;


@Schema()
export class Pet {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop()
    type: string;

    @Prop()
    registeredDateTime: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet);