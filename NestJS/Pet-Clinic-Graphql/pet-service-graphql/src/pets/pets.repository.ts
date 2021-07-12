import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as mongoose from 'mongoose';
import { CreatePetDto } from "./dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { Pet, PetDocument } from "./schema/pet.schema";

@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private readonly petModel: Model<PetDocument>){}

    async addPet(createPetDto: CreatePetDto): Promise<Pet> {
        const newPet = {
            name: createPetDto.name,
            age: createPetDto.age,
            breed: createPetDto.breed,
            type: createPetDto.type,
            ownerId: createPetDto.ownerId,
            registeredDateTime: new Date()
        }
        let createdPet = new this.petModel(newPet);
        return await createdPet.save();
    }

    // async findPetById(id: string) {
    //     return this.petModel.findOne({ _id: id });
    // }

    // async findAll(): Promise<Pet[]> {
    //     return this.petModel.find();
    // }

    // async deletePetById(id: string): Promise<boolean> {
    //     let petId = mongoose.Types.ObjectId(id)
    //     let isDeleted = await this.petModel.deleteOne({ id: id })
    //     return (isDeleted.n === 1)  
    // }

    async updatePet(updatePetDto: UpdatePetDto): Promise<Pet> {
        return this.petModel.findByIdAndUpdate(updatePetDto._id);
    }

    async getPetByOwnerId(ownerId: string): Promise<Pet[]> {
        return this.petModel.find({ownerId: ownerId});
    }

}