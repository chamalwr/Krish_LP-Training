import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { Owner, OwnerSchema } from './entities/owner.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]) ],
  providers: [OwnersResolver, OwnersService]
})
export class OwnersModule {}
