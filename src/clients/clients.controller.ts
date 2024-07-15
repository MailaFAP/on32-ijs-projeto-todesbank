import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
export class ClientsController {
    private readonly clientsService: ClientsService

    constructor(clientsService: ClientsService) {
        this.clientsService = clientsService;
    }

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        const client = new Client(
            createClientDto.getId,
            createClientDto.getName,
            createClientDto.getAdress,
            createClientDto.getFone,
            createClientDto.getIcome,
            createClientDto.getAccount,
            createClientDto.getManager)
        return this.clientsService.create(client);
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

    @Get(':id/:idAccount/balance')
    checkBalance(@Param('id')id: string, @Param('idAccount') idAccount: string) {
        const client = this.clientsService.findOne(id);
        const account = client.getAccount.find((account) => account.getIdAccount === idAccount)
        return this.clientsService.checkBalance(account);
    }

    @Put(':id/idAccount')
    deposit(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        const client = this.clientsService.findOne(id);
        const account = client.getAccount.find((account) => account.getIdAccount === idAccount)
        return this.clientsService.deposit(value, account);
    }

    @Put(':id/idAccount')
    withdrawMoney(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        const client = this.clientsService.findOne(id);
        const account = client.getAccount.find((account) => account.getIdAccount === idAccount)
        return this.clientsService.withdrawMoney(value, account);
    }

    @Put(':id/idAccount')
    transfer(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        const client = this.clientsService.findOne(id);
        const account = client.getAccount.find((account) => account.getIdAccount === idAccount)
        return this.clientsService.transfer(value, account);
    }


}
