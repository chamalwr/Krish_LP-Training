import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwner } from './create-owner.dto';
import { Owner } from './owner.schema';
import { OwnerRepository } from './owner-repository';
import { UpdateOwnerDto } from './update-owner.dto';

@Injectable()
export class OwnerService {
   
    constructor(private ownerRepository: OwnerRepository){}

    async addOwner(createOwnerDto: CreateOwner): Promise<Owner>{
        return await this.ownerRepository.addOwner(createOwnerDto);
    }

    findById(id: string): Promise<Owner>{
        let owner = this.ownerRepository.findById(id)
        if (!owner) {
            throw new NotFoundException(`Owner Not Found : ${id}`)
        }
        return owner;  
    }

    findAll(): Promise<Owner[]> {
        return this.ownerRepository.findAll();
    }

    async deleteOwnerById(id: string): Promise<boolean> {
        let isDeleted = await this.ownerRepository.deleteOwnerById(id);
        return isDeleted;
    }

    async updateOwner(updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
        return await this.ownerRepository.updateOwner(updateOwnerDto);
    }
}
