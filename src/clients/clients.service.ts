import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class ClientsService {

  private clients: Client[] = [];

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

  /*update(id: string, updateClientDto: UpdateClientDto): void {
    const clientIndex = this.clients.findIndex((client) => client.id === id);
    if (clientIndex) {
      Client.name= 
    };
  }*/

  remove(id: string): void {
    this.clients = this.clients.filter((client) => client.id !== id);
  }

  openAccount(account: Account, client: Client ): string {
    if(client.income >= 500) {
      return account.typeAccount = 'CORRENTE';
    } else {
      return account.typeAccount = 'POUPANÇA';
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

  checkBalance(account: Account): number {
    return account.balance;
  }


}


//modificarTipoConta