import { Injectable } from '@nestjs/common';
import { Client } from '../entities/client.entity';
import { Account } from '../entities/account.entity';

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
  
    remove(id: string): Client[] {
        return this.clients = this.clients.filter((client) => client.id !== id);
    }


    //MÉTODOS DO CLIENTE
    
    openAccount(account: Account, client: Client): string {
        if (client.income >= 500) {
            account.typeAccount = 'CORRENTE';
            account.status = true;
            return `Parabéns ${client.name}, sua conta Corrente está aberta!`
        } else {
            account.typeAccount = 'POUPANÇA';
            account.status = true;
            return `Parabéns ${client.name}, sua conta Poupança está aberta!`
        }
    }

    closeAccount(account: Account): string {
        if (account.balance > 0) {
            return `Sua conta não está zerada, por isso não pode fechar esta conta`;
        } else if (account.balance < 0) {
            return `Sua conta está negativada. Não pode encerrar a conta com débito em aberto`;
        } else {
            account.status = false
            return `Sua conta foi fechada com sucesso`;
        }
    }

    changeTypeAccount(account: Account): string{
        if (account.typeAccount === 'CORRENTE') {
            return account.typeAccount = 'POUPANÇA';
        } else {
            return account.typeAccount = 'CORRENTE';
        }
    }

}