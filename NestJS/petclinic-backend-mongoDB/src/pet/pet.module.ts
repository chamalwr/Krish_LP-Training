import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetRepository } from './pet-repository';
import { PetController } from './pet.controller';
import { Pet, PetSchema } from './pet.schema';
import { PetService } from './pet.service';

@Module({
  imports: [ MongooseModule.forFeature([{name:Pet.name, schema: PetSchema}]) ],
  controllers: [PetController],
  providers: [PetService, PetRepository],
})
export class PetModule {}
