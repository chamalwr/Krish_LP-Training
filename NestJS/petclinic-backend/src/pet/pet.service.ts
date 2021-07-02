import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './create-pet.dto';
import { Pet } from  './Pet.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PetService {
    private pets: Pet[] = [];

    addPet(createPetDto: CreatePetDto): Pet{
        const newPet = {
            id: uuidv4(),
            name: createPetDto.name,
            age: createPetDto.age,
            breed: createPetDto.breed,
            type: createPetDto.type,
            registeredDateTime: new Date()
        }
        this.pets.push(newPet);
        return newPet;
    }

    findPetById(id: string): Pet {
        let pet = this.pets.find(pet => pet.id === id)
        if (!pet) {
            throw new NotFoundException(`${id} Pet Not Found` )
        }
        return pet;
    }

    findAll(): Pet[] {
        return this.pets;
    }

    deletePetById(id: string): boolean {
        if(this.isExists(id)){
            let indexToBeRemoved = this.pets.map(function(pet) { return pet.id; }).indexOf(id);
            this.pets.splice(indexToBeRemoved, 1);
            return true;
        }
        return false;
    }

    isExists(id: string): boolean{
        let pet = this.pets.find(pet => pet.id === id);
        if(!pet){
            return false;
        }
        return true;
    }
}
