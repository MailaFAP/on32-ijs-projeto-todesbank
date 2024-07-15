import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
	private readonly accountsService: AccountsService

	constructor(accountsService: AccountsService) { 
		this.accountsService = accountsService;
	}

	@Post()
	createAccount(@Body() createAccountDto: CreateAccountDto) {
		const account = new Account(
			createAccountDto.getClient, 
			createAccountDto.getTypeAccount as 'CORRENTE' | 'POUPANÇA',
			createAccountDto.getBalance, 
			createAccountDto.getStatus)
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
}
