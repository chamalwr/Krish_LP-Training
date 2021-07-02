import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin, AdminDocument } from "./admin.schema";
import { CreateAdmin } from "./create-admin.dto";
import * as mongoose from 'mongoose';


@Injectable()
export class AdminRepository {
    constructor(@InjectModel(Admin.name) private adminModel: Model<AdminDocument>){}

    async add(createAdminDto: CreateAdmin): Promise<Admin>{
        let newAdmin = new this.adminModel(createAdminDto);
        return await newAdmin.save();
    }

    async findById(id: string): Promise<Admin> {
        return await this.adminModel.findOne({ _id: id })
    }

    async findAll(): Promise<Admin[]> {
        return await this.adminModel.find();
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)
        let ret = await this.adminModel.deleteOne({ _id: objId })
        return (ret.n === 1)
    }
}