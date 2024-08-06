import { Manager } from '../entities/manager.entity';
import { v4 as uuidv4 } from 'uuid';
import { BankAccount } from 'src/application/interfaces/banckAccount.interface';

export class Client {
    idClient: string;
    name: string;
    adress: string;
    fone: string;
    income: number;
    account: BankAccount[];
    manager: Manager;

    constructor(name: string, adress: string, fone: string, income: number, manager: Manager) {
        this.idClient = uuidv4();
        this.name = name;
        this.adress = adress;
        this.fone = fone;
        this.income = income;
        this.account = [];
        this.manager = manager;
    }
}
