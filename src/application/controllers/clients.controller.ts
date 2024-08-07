import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from '../../domain/services/clients.service';
import { CreateClientDto } from '../dtos/client/create-client.dto';
import { UpdateClientDto } from '../dtos/client/update-client.dto';
import { Client } from '../../domain/entities/client.entity';

@Controller('clients')
export class ClientsController {
    private readonly clientsService: ClientsService

    constructor(clientsService: ClientsService) {
        this.clientsService = clientsService;
    }

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        const client = new Client(
            createClientDto.name,
            createClientDto.adress,
            createClientDto.fone,
            createClientDto.income,
            createClientDto.manager)
        return this.clientsService.create(client);
    }

    @Get()
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
