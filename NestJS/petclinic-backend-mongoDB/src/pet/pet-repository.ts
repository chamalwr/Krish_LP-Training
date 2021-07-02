import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePetDto } from "./create-pet.dto";
import { Pet, PetDocument } from "./pet.schema";
import * as mongoose from 'mongoose';

@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>){}

    async addPet(createPetDto: CreatePetDto): Promise<Pet> {
        const newPet = {
            name: createPetDto.name,
            age: createPetDto.age,
            breed: createPetDto.breed,
            type: createPetDto.type,
            registeredDateTime: new Date()
        }
        let createdPet = new this.petModel(newPet);
        return await createdPet.save();
    }

    async findPetById(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id });
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find();
    }

    async deletePetById(id: string): Promise<boolean> {
        let petId = mongoose.Types.ObjectId(id)
        let isDeleted = await this.petModel.deleteOne({ _id: petId })
        return (isDeleted.n === 1)  
    }
}