import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class ClientsService {

    private clients: Client[] = [];

    //CRUD
    create(client: Client): Client {
        this.clients.push(client);
        return client;
    }

    findAll(): Client[] {
        return [...this.clients];
    }

    findOne(id: string): Client {
        return this.clients.find((client) => client.id === id);
    }
  
    remove(id: string): void {
        this.clients = this.clients.filter((client) => client.id !== id);
    }


    //MÉTODOS DO CLIENTE
    

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
            if (account.balance > value) {
                account.balance = account.balance - value
            } else {
                console.log(`Saldo insuficiente`);
            }
        } else {
            console.log(`Operação de saque inválida. Conta inexistete `);
        }
    }

    transfer(valueOfTransf: number, account: Account): void {
        let valueEnd = account.balance - valueOfTransf
        if (account.balance > valueOfTransf) {
            console.log(`Você não tem saldo suficiente para esta transação`);
        } else {
            console.log(`Transferencia realizada com sucesso, seu novo saldo é de ${valueEnd}.`);
        }
    }
}