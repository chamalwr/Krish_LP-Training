import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './create-pet.dto';
import { Pet } from  './pet.schema';
import { PetRepository } from './pet-repository';
import { UpdatePetDto } from './update-pet.dto';

@Injectable()
export class PetService {

    constructor(private petRepository: PetRepository){}

    async addPet(createPetDto: CreatePetDto): Promise<Pet> {
        return await this.petRepository.addPet(createPetDto);
    }

    findPetById(id: string): Promise<Pet> {
        let pet = this.petRepository.findPetById(id)
        if (!pet) {
            throw new NotFoundException(`Pet Not Found : ${id}`)
        }
        return pet;
    }

    async findAll(): Promise<Pet[]> {
       return await this.petRepository.findAll();
    }

    async deletePetById(id: string): Promise<boolean> {
        let isDeleted = await this.petRepository.deletePetById(id);
        return isDeleted;
    }

    async updatePet(updatePetDto: UpdatePetDto): Promise<Pet> {
        return await this.petRepository.updatePet(updatePetDto);
    }
}
