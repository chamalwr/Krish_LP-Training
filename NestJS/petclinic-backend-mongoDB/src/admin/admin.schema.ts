import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Branch, Status } from "./admin.enum";

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
    @Prop()
    id: string;
    
    @Prop({required: true})
    firstName: string;
    
    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    contactNumber: string;

    @Prop()
    dateOfRegistered: Date;

    @Prop()
    branch: Branch;

    @Prop()
    status: Status;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);