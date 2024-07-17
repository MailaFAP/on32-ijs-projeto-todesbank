import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
    private accounts: Account[] = [];

    createAccount(account: Account) {
        this.accounts.push(account);
        return account;
    }

    findAllAccount(): Account[]{
        return [...this.accounts];
    }

    findOneAccount(id: string): Account{
        return this.accounts.find((account) => account.idAccount === id);
    }

    updateAccount(id: string, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${id} account`;
    }

    removeAccount(id: string):void {
        this.accounts = this.accounts.filter((account) => account.idAccount !== id);
    }

    checkBalance(account: Account): number {
        return account.balance;
    }

    deposit(value: number, account: Account): void {
        if (account.status === true) {
            account.balance = account.balance + value
            console.log(`Seu saldo atual é de ${account.balance}.`);
        } else {
            console.log(`Operação de depósito inválida. Conta inexistente`);
        }
    }

    withdrawMoney(value: number, account: Account): void {
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
        if (origin.balance >= valueOfTransf && destination.status === true) {
            origin.balance = origin.balance - valueOfTransf;
            destination.balance = destination.balance + valueOfTransf;
            console.log(`Transferencia realizada com sucesso, seu novo saldo é de ${origin.balance}.`);
        } else {
            console.log(`Você não tem saldo suficiente para esta transação, ou conta de destino inexistente`);
        }
    }
}
