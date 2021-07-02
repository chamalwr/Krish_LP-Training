import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminBranchValidationPipe } from './admin-branch-validation.pipe';
import { Admin } from './admin.schema';
import { AdminService } from './admin.service';
import { CreateAdmin } from './create-admin.dto';
import { SearchAdmin } from './search-admin.dto';


@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) {}

    @Post()
    @UsePipes(new AdminBranchValidationPipe())
    addAdmin(@Body() createAdminDto: CreateAdmin): Promise<Admin> {
        return this.adminService.addAnAdmin(createAdminDto);
    }

    @Get()
    getAllAdmins(): Promise<Admin[]> {
        return this.adminService.findAll();
    }

    @Get('/:id')
    getAdminById(@Param('id') id: string): Promise<Admin> {
        return this.adminService.findById(id);
    }

    @Delete('/:id')
    @HttpCode(204)
    async deleteAdmin(@Param('id') id: string){
        let isDeleted = await this.adminService.deleteById(id);
        if (!isDeleted) {
            throw new NotFoundException('Record not found to delete')
        }
    }
}
