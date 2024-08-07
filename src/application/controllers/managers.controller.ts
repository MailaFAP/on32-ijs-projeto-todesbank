import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagersService } from '../../domain/services/managers.service';
import { CreateManagerDto } from '../dtos/manager/create-manager.dto';
import { UpdateManagerDto } from '../dtos/manager/update-manager.dto';
import { Manager } from '../../domain/entities/manager.entity';

@Controller('managers')
export class ManagersController {
    private managersService: ManagersService

    constructor(managersService: ManagersService) {
        this.managersService = managersService;
     }

    @Post()
    createNewManager(@Body() createManagerDto: CreateManagerDto) {
        const manager = new Manager(createManagerDto.nameManager)
        return this.managersService.createNewManager(manager);
    }

    @Get()
    findAllManager() {
        return this.managersService.findAllManager();
    }

    @Get(':id')
    findManagerById(@Param('id') id: string) {
        return this.managersService.findManagerById(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
        return this.managersService.update(id, updateManagerDto);
    }

    @Delete(':id')
    removeManager(@Param('id') id: string) {
        return this.managersService.removeManager(id);
    }

}
