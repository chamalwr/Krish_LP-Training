import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetsService } from './pets.service';
import { Pet } from './schema/pet.schema';

@Resolver()
export class PetsResolver {
    
    constructor(private petService: PetsService){}

    @Query(() => [Pet], {name: "GetAllPets"})
    async getAllPets(): Promise<Pet[]> {
        return this.petService.findAll();
    }

    @Query(() => Pet, {name: "GetPetById", nullable: true })
    async getPetById(@Args('id') id: string) {
        return this.petService.findPetById(id);
    }

    @Mutation(()=> Pet, {name: "AddNewPet",  nullable: true })
    async addPet(@Args('newPet') createPetDto: CreatePetDto) {
        return this.petService.addPet(createPetDto);
    }

    @Mutation(() => Boolean, {name: "DeletePetById", nullable: true })
    async deletePetById(@Args('id') id: string){
        return this.petService.deletePetById(id);
    }

    @Mutation(() => Pet, {name: "UpdatePetDetail", nullable: true })
    async updatePet(@Args('updatedPet') updatePetDto: UpdatePetDto) {
        return this.petService.updatePet(updatePetDto);
    }
}
