import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
    private accounts: Account[] = [];

    constructor(accounts: Account[]){
        this.accounts = accounts;
    }

    createAccount(account: Account) {
        this.accounts.push(account);
        return account;
    }

    findAllAccount(): Account[]{
        return [...this.accounts];
    }

    findOneAccount(id: string): Account{
        return this.accounts.find((account) => account.getIdAccount === id);
    }

    updateAccount(id: string, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${id} account`;
    }

    removeAccount(id: string):void {
        this.accounts = this.accounts.filter((account) => account.getIdAccount !== id);
    }
}
