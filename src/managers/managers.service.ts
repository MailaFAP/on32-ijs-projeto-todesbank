import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class ManagersService {
    managers: Manager[] = [];
    clients: Client[] = [];

    //CRUD
    createNewManager(manager: Manager): Manager {
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
        return this.managers.filter((manager) => manager.id !== id);
    }


    //MÉTODOS DO GERENTE
    addClientToManager(client: Client): Client {
        this.clients.push(client);
        return client;
    }

    removedClientToManager(id: string, client: Client) {
        this.clients.filter((client) => client.id !== id);
        return client;
    }

    openAccount(account: Account, client: Client): string {
        if (client.income >= 500) {
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
}


//mudarTipoConta