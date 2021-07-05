import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateOwner } from './create-owner.dto';
import { Owner } from './owner.schema';
import { OwnerService } from './owner.service';
import { UpdateOwnerDto } from './update-owner.dto';

@Controller('owner')
export class OwnerController {

    constructor(private ownerService: OwnerService){}

    @Get()
    getAllOwners(): Promise<Owner[]> {
        return this.ownerService.findAll();
    }

    @Get('/:id')
    getOwnerById(@Param('id') id: string): Promise<Owner> {
        return this.ownerService.findById(id);
    }

    @Post()
    addOwner(@Body() createOwnerDto: CreateOwner): Promise<Owner> {
        return this.ownerService.addOwner(createOwnerDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwner(@Param('id') id: string){
        if(!this.ownerService.deleteOwnerById(id)){
            throw new NotFoundException(`Owner Not found : ${id}`);
        }
    }

    @Put()
    updateOwner(@Body() updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
        return this.ownerService.updateOwner(updateOwnerDto);
    }
}
