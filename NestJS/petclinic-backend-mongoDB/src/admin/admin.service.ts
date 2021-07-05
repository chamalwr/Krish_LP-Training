import { Injectable, NotFoundException } from '@nestjs/common';
import { Status } from './admin.enum';
import { CreateAdmin } from './create-admin.dto';
import { v4 as uuid4} from 'uuid'
import { SearchAdmin } from './search-admin.dto';
import { Admin } from './admin.schema';
import { AdminRepository } from './admin-repository';
import { UpdateAdminDto } from './update-admin.dto';

@Injectable()
export class AdminService {
    
    constructor(private adminRepository: AdminRepository){}

    async addAnAdmin(createAdminDto: CreateAdmin): Promise<Admin> {
        return await this.adminRepository.add(createAdminDto);
    }

    findById(id: string): Promise<Admin> {
        let admin = this.adminRepository.findById(id)
        if (!admin) {
            throw new NotFoundException(`Admin Not Found : ${id}`)
        }
        return admin;
    }

    findAll(): Promise<Admin[]> {
       return this.adminRepository.findAll();
    }

    async deleteById(id: string): Promise<boolean>{
        let isDeleted = await this.adminRepository.delete(id);
        return isDeleted;
    }

    async updateAdmin(updateAdminDto: UpdateAdminDto): Promise<Admin> {
        return await this.adminRepository.update(updateAdminDto);
    }
}
