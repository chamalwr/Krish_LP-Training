import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerRepository } from './owner-repository';
import { OwnerController } from './owner.controller';
import { Owner, OwnerSchema } from './owner.schema';
import { OwnerService } from './owner.service';

@Module({
  imports: [MongooseModule.forFeature([{name:Owner.name, schema: OwnerSchema}])],
  controllers: [OwnerController],
  providers: [OwnerService, OwnerRepository],
})
export class OwnerModule {}
