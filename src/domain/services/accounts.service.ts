import { Injectable } from '@nestjs/common';
import { UpdateAccountDto } from '../../application/dtos/account/update-account.dto';
import { Account } from '../entities/account/currentAccount.entity';

@Injectable()
export class AccountsService {
    private accounts: Account[] = [];

    //CRUD Account
    createAccount(account: Account): Account {
        this.accounts.push(account);
        return account;
    }

    findAllAccount(): Account[] {
        return [...this.accounts];
    }

    findOneAccount(id: string): Account {
        return this.accounts.find((account) => account.idAccount === id);
    }

    updateAccount(id: string, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${id} account`;
    }

    removeAccount(id: string): Account[] {
        return this.accounts = this.accounts.filter((account) => account.idAccount !== id);
    }

    //Método Account

    checkBalance(idAccount: string, clientId): number {
        const client = this.clientsService.findOne(clientId);
        const account = client.account.find((account) => account.idAccount === idAccount);
        return account.balance;
    }

    deposit(value: number, idAccount: string): void {
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        if (account.status === true) {
            account.balance = account.balance + value
            console.log(`Seu saldo atual é de ${account.balance}.`);
        } else {
            console.log(`Operação de depósito inválida. Conta inexistente`);
        }
    }

    withdrawMoney(value: number, idAccount: string): void {
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        if (account.status === true) {
            if (account.balance >= value) {
                account.balance = account.balance - value;
            } else {
                console.log(`Saldo insuficiente`);
            }
        } else {
            console.log(`Operação de saque inválida. Conta inexistete `);
        }
    }

    transfer(valueOfTransf: number, origin: Account, destination: Account): void {
        const client = this.clientsService.findOne(id);
        const account = client.account.find((account) => account.idAccount === idAccount)
        const destination = this.accountsService.findOneAccount(destinationIdAccount)
        if (origin.balance >= valueOfTransf && destination.status === true) {
            origin.balance = origin.balance - valueOfTransf;
            destination.balance = destination.balance + valueOfTransf;
            console.log(`Transferencia realizada com sucesso, seu novo saldo é de ${origin.balance}.`);
        } else {
            console.log(`Você não tem saldo suficiente para esta transação, ou conta de destino inexistente`);
        }
    }
}
