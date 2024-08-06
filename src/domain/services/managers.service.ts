import { Injectable } from '@nestjs/common';
import { UpdateManagerDto } from '../../application/dtos/manager/update-manager.dto';
import { Manager } from '../entities/manager.entity';
import { Client } from '../entities/client.entity';
import { BankAccount } from 'src/application/interfaces/banckAccount.interface';
import { AccountType } from '../enums/type.enum';

@Injectable()
export class ManagersService {
    private managers: Manager[] = [];
    private clients: Client[] = [];

    //CRUD
    createNewManager(manager: Manager): Manager {
        this.managers.push(manager);
        return manager;
    }

    findAllManager(): Manager[] {
        return [...this.managers];
    }

    findManagerById(idManager: string): Manager {
        return this.managers.find((manager) => manager.idManager === idManager);
    }

    update(idManager: string, updateManagerDto: UpdateManagerDto) {
        return `This action updates a #${idManager} manager`;
    }

    removeManager(idManager: string): Manager[] {
        return this.managers.filter((manager) => manager.idManager !== idManager);
    }


    //MÉTODOS DO GERENTE
    addClientToManager(client: Client): void {
        this.clients.push(client);
    }

    removedClientToManager(idClient: string, client:Client): Client {
        this.clients.filter((client) => client.idClient !== idClient);
        return client;
    }

    openAccount(account: BankAccount, client: Client): string {
        if (client.income >= 500) {
            account.typeAccount = AccountType.CurrentAccount;
            return `Parabéns ${client.name}, sua conta Corrente está aberta!`
        } else {
            account.typeAccount = AccountType.SavingsAccount;
            return `Parabéns ${client.name}, sua conta Poupança está aberta!`
        }
    }

    closeAccount(account: BankAccount): string {
        if (account.balance > 0) {
            return `Sua conta não está zerada, por isso não pode fechar esta conta`;
        } else if (account.balance < 0) {
            return `Sua conta está negativada. Não pode encerrar a conta com débito em aberto`;
        } else {
            return `Sua conta foi fechada com sucesso`;
        }
    }

    changeTypeAccount(account: BankAccount): string{
        if (account.typeAccount === AccountType.CurrentAccount) {
            return account.typeAccount = AccountType.SavingsAccount;
        } else {
            return account.typeAccount = AccountType.CurrentAccount;
        }
    }
}