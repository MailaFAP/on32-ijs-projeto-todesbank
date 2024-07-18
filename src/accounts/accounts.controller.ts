import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { ClientsService } from 'src/clients/clients.service';

@Controller(':accounts')
export class AccountsController {
	private readonly accountsService: AccountsService
	private readonly clientsService: ClientsService

	constructor(accountsService: AccountsService, clientsServices: ClientsService) { 
		this.accountsService = accountsService;
		this.clientsService = clientsServices;
	}

	@Post()
	createAccount(@Body() createAccountDto: CreateAccountDto) {
		console.log(createAccountDto)
		const account = new Account(
			createAccountDto.client, 
			createAccountDto.typeAccount as 'CORRENTE' | 'POUPANÇA',
			createAccountDto.balance, 
			createAccountDto.status)
		console.log(account)
		return this.accountsService.createAccount(account);
	}

	@Get(':all')
	findAllAccount() {
		return this.accountsService.findAllAccount();
	}

	@Get(':id')
	findOneAccount(@Param('id') id: string) {
		return this.accountsService.findOneAccount(id);
	}

	@Patch(':id')
	updateAccount(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
		return this.accountsService.updateAccount(id, updateAccountDto);
	}

	@Delete(':id')
	removeAccount(@Param('id') id: string) {
		return this.accountsService.removeAccount(id);
	}

	@Get(':id/:idAccount/balance')
    checkBalance(@Param('id')id: string, @Param('idAccount') idAccount: string) {
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        return this.accountsService.checkBalance(account);
    }

    @Put(':id/:idAccount')
    deposit(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        return this.accountsService.deposit(value, account);
    }

    @Put(':id/:idAccount')
    withdrawMoney(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        return this.accountsService.withdrawMoney(value, account);
    }

    @Put(':id/:idAccount/transfer')
    transfer(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number, @Body('destinationIdAccount')destinationIdAccount: string){
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        const destination = this.accountsService.findOneAccount(destinationIdAccount)
        return this.accountsService.transfer(value, account, destination);
    }

}
