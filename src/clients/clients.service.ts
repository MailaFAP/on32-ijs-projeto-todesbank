import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

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
    this.clients = this.clients.filter((client) => client.id !==id);
  }
}
