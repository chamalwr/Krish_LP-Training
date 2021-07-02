import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { OwnerModule } from './owner/owner.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';

@Module({
  imports: [PetModule, OwnerModule, AdminModule, MongooseModule.forRoot(MONGO_CONNECTION)],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
