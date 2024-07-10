import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { Client } from 'src/clients/entities/client.entity';

@Injectable()
export class ManagersService {
  managers: Manager[] = [];
  clients: Client[] =[];

  createNewManager(manager: Manager) : Manager{
    this.managers.push(manager);
    return manager;
  }

  findAllManager() {
    return [...this.managers];
  }

  findManagerById(id: string) {
    return this.managers.find((manager) => manager.id === id);
  }

  update(id: string, updateManagerDto: UpdateManagerDto) {
    return `This action updates a #${id} manager`;
  }

  removeManager(id: string) {
    return this.managers.filter((manager) => manager.id !==id);
  }

  addClientToManager(client: Client): Client{
    this.clients.push(client);
    return client;
  }

  removedClientToManager(id: string, client: Client) {
    this.clients.filter((client) => client.id !==id);
    return client;
  }
}


//mudarTipoConta