import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateOwner } from './create-owner.dto';
import { Owner } from './owner.model';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {

    constructor(private ownerService: OwnerService){}

    @Get()
    getAllOwners(): Owner[] {
        return this.ownerService.findAll();
    }

    @Get('/:id')
    getOwnerById(@Param('id') id: string): Owner {
        return this.ownerService.findById(id);
    }

    @Post()
    addOwner(@Body() createOwnerDto: CreateOwner): Owner {
        return this.ownerService.addOwner(createOwnerDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwner(@Param('id') id: string){
        if(!this.ownerService.deleteOwnerById(id)){
            throw new NotFoundException(`Owner Not found : ${id}`);
        }
    }
}
