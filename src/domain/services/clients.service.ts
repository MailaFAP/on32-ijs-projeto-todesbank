import { Injectable } from '@nestjs/common';
import { Client } from '../entities/client.entity';
import { BankAccount } from 'src/application/interfaces/banckAccount.interface';
import { AccountType } from '../enums/type.enum';

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

    findOne(idClient: string): Client {
        const client = this.clients.find((client) => client.idClient === idClient);
        return client;
    }
  
    remove(idClient: string): Client[] {
        this.clients = this.clients.filter((client) => client.idClient !== idClient);
        return this.clients;
    }


    //MÉTODOS DO CLIENTE
    
    openAccount(account: BankAccount): void{
        
    }

    closeAccount(account: BankAccount): void {
        
    }

    changeTypeAccount(account: BankAccount, newType: string): void{

    }

}