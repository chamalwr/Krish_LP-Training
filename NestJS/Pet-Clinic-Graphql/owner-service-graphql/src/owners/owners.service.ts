import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { OwnerDocument } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(@InjectModel('Owner') private ownerModel: Model<OwnerDocument>){}

  async create(createOwnerInput: CreateOwnerInput) {
      let createdOwner = new this.ownerModel(createOwnerInput);
      return createdOwner.save();
  }

  async findAll() {
      return await this.ownerModel.find().exec();
  }

  async findOne(id: string) {
      return this.ownerModel
                .findById(id)
                .exec();
  }

  async update(updateOwnerInput: UpdateOwnerInput) {
      return await this.ownerModel
                .findByIdAndUpdate(updateOwnerInput._id, updateOwnerInput, { new: true })
                .exec();
  }

  async remove(id: string) {
    return await this.ownerModel
                .findByIdAndDelete(id)
                .exec();
  }
}
