import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin, Status } from './admin.model';
import { CreateAdmin } from './create-admin.dto';
import { v4 as uuid4} from 'uuid'
import { SearchAdmin } from './search-admin.dto';

@Injectable()
export class AdminService {
    
    private admins: Admin[] = [];

    addAnAdmin(createAdminDto: CreateAdmin): Admin {
        const newAdmin = {
            id: uuid4(),
            firstName: createAdminDto.firstName,
            lastName: createAdminDto.lastName,
            email: createAdminDto.email,
            contactNumber: createAdminDto.contactNumber,
            dateOfRegistered: new Date(),
            branch: createAdminDto.branch,
            status: Status.ACTIVE,
        }
        this.admins.push(newAdmin);
        return newAdmin;
    }

    findById(id: string): Admin {
        let admin = this.admins.find(admin => admin.id === id);
        if(!admin){
            throw new NotFoundException(`Admin not Found : ${id}`);
        }
        return admin;
    }

    findAll(): Admin[] {
        return this.admins;
    }

    deleteById(id: string): boolean{
        if(this.isExists(id)){
            let indexToBeRemoved = this.admins.map(function(admin) { return admin.id; }).indexOf(id);
            this.admins.splice(indexToBeRemoved, 1);
            return true;
        }

        return false;
    }

    getAdminsByBranch(statusDto: SearchAdmin): Admin[]{
        console.log(statusDto);
        let adminsByStatus = this.admins.filter(admin => admin.branch === statusDto.branch);
        return adminsByStatus;
    }

    isExists(id: string): boolean{
        let admin = this.admins.find(admin => admin.id === id);
        if(!admin){
            return false;
        }
        return true;
    }
}
