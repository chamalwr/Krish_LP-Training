import { Controller, Get, Post, Param, Body, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { CreatePetDto } from './create-pet.dto';
import { Pet } from './Pet.model';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {

  constructor(private petService : PetService){}
  
  @Get()
  getAllPets(): Pet[] {
    return this.petService.findAll()
  }

  @Get('/:id')
  getPetById(@Param('id') id: string): Pet{
    return this.petService.findPetById(id);
  }

  @Post()
  addPet(@Body() createPetDao: CreatePetDto): Pet{
    return this.petService.addPet(createPetDao);
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePet(@Param('id') id: string){
    if(!this.petService.deletePetById(id)){
        throw new NotFoundException(`Pet Not Found : ${id}`);
    }
  }
}
