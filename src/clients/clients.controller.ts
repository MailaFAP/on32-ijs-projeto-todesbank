import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        return this.clientsService.create(createClientDto);
    }

    @Get('all')
    findAll() {
        return this.clientsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.clientsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clientsService.remove(id);
    }
}
