import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { AccountsService } from 'src/accounts/accounts.service';

@Controller(':clients')
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
            createClientDto.account,
            createClientDto.manager)
        const xxx = this.clientsService.create(client);
        return xxx;
    }

    @Get(':all')
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
