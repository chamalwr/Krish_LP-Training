import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminBranchValidationPipe } from './admin-branch-validation.pipe';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { CreateAdmin } from './create-admin.dto';
import { SearchAdmin } from './search-admin.dto';


@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) {}

    @Get()
    getAllAdmins(): Admin[] {
        return this.adminService.findAll();
    }

    @Get('/:id')
    getAdminById(@Param('id') id: string): Admin {
        return this.adminService.findById(id);
    }

    @Post()
    @UsePipes(new AdminBranchValidationPipe())
    addAdmin(@Body() createAdminDto: CreateAdmin): Admin {
        return this.adminService.addAnAdmin(createAdminDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteAdmin(@Param('id') id: string){
        if(!this.adminService.deleteById(id)){
            throw new NotFoundException(`Admin Not Found : ${id}`);
        }
    }

    @Get('branch')
    @UsePipes(ValidationPipe)
    getAdminsByStatus(@Body() searchAdminDto : SearchAdmin): Admin[] {
        return this.adminService.getAdminsByBranch(searchAdminDto);
    }
    
}
