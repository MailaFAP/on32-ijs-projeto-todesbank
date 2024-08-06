import { Injectable } from '@nestjs/common';
import { UpdateAccountDto } from '../../application/dtos/account/update-account.dto';
import { BankAccount } from 'src/application/interfaces/banckAccount.interface';

@Injectable()
export class AccountsService {
    private accounts: BankAccount[] = [];

    //CRUD BankAccount
    createAccount(account: BankAccount): BankAccount {
        this.accounts.push(account);
        return account;
    }

    findAllAccount(): BankAccount[] {
        return [...this.accounts];
    }

    findOneAccount(idBankAccount: string): BankAccount {
        const findOne = this.accounts.find((account) => account.idBankAccount === idBankAccount);
        return findOne;
    }

    updateAccount(idBankAccount: string, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${idBankAccount} account`;
    }

    removeAccount(idBankAccount: string): void {
        this.accounts = this.accounts.filter((account) => account.idBankAccount !== idBankAccount);
        console.log(`A conta ${idBankAccount} foi excluida com sucesso.` );
    }

    //Método BankAccount
    checkBalance(idBankAccount:string): number{
        const lookBalance = this.accounts.find((account) => account.idBankAccount === idBankAccount);
        return lookBalance.checkBalance();
    }

    deposit(idBankAccount: string, value:number): void{
        const findOne = this.accounts.find((account) => account.idBankAccount === idBankAccount);
        findOne.deposit(value);
    }
    withdrawMoney(idBankAccount: string, value:number): void{
        const findOne = this.accounts.find((account) => account.idBankAccount === idBankAccount);
        findOne.withdrawMoney(value);
    }
    transfer(idOriginAccount: string, idDestinationAccount: string, value:number): void{
        const origin = this.accounts.find((account) => account.idBankAccount === idOriginAccount);
        const destination = this.accounts.find((account) => account.idBankAccount === idDestinationAccount);
        origin.balance -+ value;
        destination.transfer(destination, value);
        
    }
}
