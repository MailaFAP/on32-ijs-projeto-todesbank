import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccountsService } from '../../domain/services/accounts.service';
import { CreateAccountDto } from '../../application/dtos/account/create-account.dto';
import { UpdateAccountDto } from '../../application/dtos/account/update-account.dto';
import { CurrentAccount } from '../../domain/entities/account/currentAccount.entity';
import { SavingsAccount } from 'src/domain/entities/account/savingsAccount.entity';

@Controller('accounts')
export class AccountsController {
	private readonly accountsService: AccountsService

	constructor(accountsService: AccountsService) { 
		this.accountsService = accountsService;
	}

	@Post('current')
	createCurrentAccount(@Body() createAccountDto: CreateAccountDto) {
		const account = new CurrentAccount(
			createAccountDto.idClient,
			createAccountDto.balance)
		return this.accountsService.createAccount(account);
	}

	@Post('savings')
	createSavingsAccount(@Body() createAccountDto: CreateAccountDto) {
		const account = new SavingsAccount(
			createAccountDto.idClient,
			createAccountDto.balance)
		return this.accountsService.createAccount(account);
	}

	@Get()
	findAllAccount() {
		return this.accountsService.findAllAccount();
	}

	@Get(':idBanckAccount')
	findOneAccount(@Param('idBanckAccount') idBankAccount: string) {
		return this.accountsService.findOneAccount(idBankAccount);
	}

	@Patch(':idBanckAccount')
	updateAccount(@Param('idBanckAccount') idBankAccount: string, @Body() updateAccountDto: UpdateAccountDto) {
		return this.accountsService.updateAccount(idBankAccount, updateAccountDto);
	}

	@Delete(':idBanckAccount')
	removeAccount(@Param('idBanckAccount') idBankAccount: string) {
		return this.accountsService.removeAccount(idBankAccount);
	}

	@Get(':idBanckAccount/balance')
    checkBalance(@Param('idBankAccount') idBankAccount: string) {
        return this.accountsService.checkBalance(idBankAccount);
    }

    @Put(':idBanckAccount/deposit')
    deposit( @Param('idBankAccount') idBankAccount: string, @Body('value')value: number){
        return this.accountsService.deposit(idBankAccount, value);
    }

    @Put(':idBanckAccount/withdrawMoney')
    withdrawMoney(@Param('idBankAccount') idBankAccount: string, @Body('value')value: number){
        return this.accountsService.withdrawMoney(idBankAccount, value);
    }

    @Put(':idBankAccount/:idBankAccount/transfer')
    transfer( @Param('idBankAccount') idOriginAccount: string, @Param('idBankAccount') idDestinationAccount: string, @Body('value')value: number){
        return this.accountsService.transfer(idOriginAccount, idDestinationAccount,value);
    }

}
