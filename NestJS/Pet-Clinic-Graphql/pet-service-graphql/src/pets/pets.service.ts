import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet, PetDocument } from './schema/pet.schema';

@Injectable()
export class PetsService {
    
    constructor(@InjectModel('Pet') private readonly petModel: Model<PetDocument>){}

    async addPet(createPetDto: CreatePetDto) {
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

    findPetById(id: string) {
        return this.petModel.findById(id).exec();
    }

    async findAll() {
        return await this.petModel.find().exec();
    }

    async deletePetById(id: string) {
        return this.petModel
                .findByIdAndDelete(id)
                .exec();
    }

    async updatePet(updatePetDto: UpdatePetDto) {
        return this.petModel
            .findByIdAndUpdate(updatePetDto._id, updatePetDto, { new: true })
            .exec();
    }
}
