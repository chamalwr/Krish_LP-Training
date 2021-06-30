import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwner } from './create-owner.dto';
import { Owner } from './owner.model';
import { v4 as uuidv4} from 'uuid';

@Injectable()
export class OwnerService {
    private owners: Owner[] = [];

    addOwner(createOwnerDto: CreateOwner): Owner{
        const newOwner = {
            id: uuidv4(),
            firstName: createOwnerDto.firstName,
            lastName: createOwnerDto.lastName,
            address: createOwnerDto.address,
            zipCode: createOwnerDto.zipCode,
            contactNumber: createOwnerDto.contactNumber,
            email: createOwnerDto.email,
        }
        this.owners.push(newOwner);
        return newOwner;
    }

    findById(id: string): Owner{
        let owner = this.owners.find(owner => owner.id == id);
        if (!owner){
            throw new NotFoundException(`Owner from Id : ${id} is not found!`);
        }
        return owner;
    }

    findAll(): Owner[] {
        return this.owners;
    }

    deleteOwnerById(id: string): boolean {
        if(this.isExists(id)){
            let indexToBeRemoved = this.owners.map(function(owner) { return owner.id; }).indexOf(id);
            this.owners.splice(indexToBeRemoved, 1);
            return true;
        }
        return false;
    }

    isExists(id: string): boolean{
        let owner = this.owners.find(owner => owner.id === id);
        if(!owner){
            return false;
        }
        return true;
    }
}
