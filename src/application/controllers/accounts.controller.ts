import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccountsService } from '../../domain/services/accounts.service';
import { CreateAccountDto } from '../../application/dtos/account/create-account.dto';
import { UpdateAccountDto } from '../../application/dtos/account/update-account.dto';
import { Account } from '../../domain/entities/account/currentAccount.entity';

@Controller('accounts')
export class AccountsController {
	private readonly accountsService: AccountsService

	constructor(accountsService: AccountsService) { 
		this.accountsService = accountsService;
	}

	@Post()
	createAccount(@Body() createAccountDto: CreateAccountDto) {
		const account = new Account(
			createAccountDto.client, 
			createAccountDto.typeAccount as 'CORRENTE' | 'POUPANÇA',
			createAccountDto.balance, 
			createAccountDto.status)
		return this.accountsService.createAccount(account);
	}

	@Get()
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
        return this.accountsService.checkBalance(id,idAccount);
    }

    @Put(':id/:idAccount')
    deposit(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        return this.accountsService.deposit(value, idAccount);
    }

    @Put(':id/:idAccount')
    withdrawMoney(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number){
        return this.accountsService.withdrawMoney(value, idAccount);
    }

    @Put(':id/:idAccount/transfer')
    transfer(@Param('id')id: string, @Param('idAccount') idAccount: string, @Body('value')value: number, @Body('destinationIdAccount')destinationIdAccount: string){
        return this.accountsService.transfer(value, idAccount, destination);
    }

}
