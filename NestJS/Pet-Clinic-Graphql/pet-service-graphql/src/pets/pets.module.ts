import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { Pet, PetSchema } from './schema/pet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PetRepository } from './pets.repository';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]) ],
  providers: [PetsService, PetsResolver, PetRepository]
})
export class PetsModule {}
