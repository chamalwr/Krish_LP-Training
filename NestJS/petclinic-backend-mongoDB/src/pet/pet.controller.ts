import { Controller, Get, Post, Param, Body, Delete, NotFoundException, HttpCode, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { CreatePetDto } from './create-pet.dto';
import { Pet } from './pet.schema';
import { PetService } from './pet.service';
import { UpdatePetDto } from './update-pet.dto';

@Controller('pet')
export class PetController {

  constructor(private petService : PetService){}
  
  @Get()
  getAllPets(): Promise<Pet[]> {
    return this.petService.findAll()
  }

  @Get('/:id')
  getPetById(@Param('id') id: string): Promise<Pet>{
    return this.petService.findPetById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addPet(@Body() createPetDao: CreatePetDto): Promise<Pet>{
    return this.petService.addPet(createPetDao);
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePet(@Param('id') id: string){
    if(!this.petService.deletePetById(id)){
        throw new NotFoundException(`Pet Not Found : ${id}`);
    }
  }

  @Put()
  updatePet(@Body() updatePetDto: UpdatePetDto) : Promise<Pet>{
    return this.petService.updatePet(updatePetDto);
  }
}
