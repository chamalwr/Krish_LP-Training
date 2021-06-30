import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { OwnerModule } from './owner/owner.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PetModule, OwnerModule, AdminModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
