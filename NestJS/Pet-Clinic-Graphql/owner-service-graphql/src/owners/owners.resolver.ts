import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(() => Owner)
  async createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownersService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'getAllOwners', nullable: true  })
  async findAll() {
    return this.ownersService.findAll();
  }

  @Query(() => Owner, { name: 'getOwnerById', nullable: true })
  async findOne(@Args('id') id: string) {
    return this.ownersService.findOne(id);
  }

  @Mutation(() => Owner, { name: 'updateOwner', nullable: true  })
  async updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownersService.update(updateOwnerInput);
  }

  @Mutation(() => Owner, { name: 'deleteOwner', nullable: true  })
  async removeOwner(@Args('id')  id: string) {
    return this.ownersService.remove(id);
  }
}
