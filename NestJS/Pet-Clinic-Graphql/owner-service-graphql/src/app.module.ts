import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGO_CONNECTION } from './app.properties';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [OwnersModule,
  GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/owner-schema.gql'),
  }),
  MongooseModule.forRoot(MONGO_CONNECTION)
  
],
  controllers: [],
  providers: [],
})
export class AppModule {}
