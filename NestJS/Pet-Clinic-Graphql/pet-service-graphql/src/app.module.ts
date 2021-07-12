import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGO_CONNECTION } from './app.properties';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_CONNECTION), 
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/pet-schema.gql'),
    }), 
  PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
