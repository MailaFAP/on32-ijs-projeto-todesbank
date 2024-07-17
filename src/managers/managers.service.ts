import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class ManagersService {
    private managers: Manager[] = [];
    private clients: Client[] = [];

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
    addClientToManager(client: Client): void {
        this.clients.push(client);
    }

    removedClientToManager(id: string, client:Client): Client {
        this.clients.filter((client) => client.id !== id);
        return client;
    }

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