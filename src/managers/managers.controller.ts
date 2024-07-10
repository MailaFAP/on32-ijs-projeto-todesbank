import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';

@Controller('managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  createNewManager(@Body() createManagerDto: CreateManagerDto) {
    return this.managersService.createNewManager(createManagerDto);
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
