import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Owner, OwnerDocument } from "./owner.schema";
import * as mongoose from 'mongoose';
import { CreateOwner } from "./create-owner.dto";

@Injectable()
export class OwnerRepository {
    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>){}

    async addOwner(createOwnerDto: CreateOwner): Promise<Owner>{
        let newOwner = new this.ownerModel(createOwnerDto);
        return await newOwner.save();
    }

    async findById(id: string): Promise<Owner>{
        return await this.ownerModel.findOne({ _id: id });
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find(); 
    }

    async deleteOwnerById(id: string): Promise<boolean> {
        let ownerId = mongoose.Types.ObjectId(id)
        let isDeleted = await this.ownerModel.deleteOne({ _id: ownerId })
        return (isDeleted.n === 1)  
    }

}