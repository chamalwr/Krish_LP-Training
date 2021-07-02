import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminRepository } from './admin-repository';
import { AdminController } from './admin.controller';
import { Admin, AdminSchema } from './admin.schema';
import { AdminService } from './admin.service';

@Module({
  imports: [MongooseModule.forFeature([ {name:Admin.name, schema: AdminSchema} ])],
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
})
export class AdminModule {}
