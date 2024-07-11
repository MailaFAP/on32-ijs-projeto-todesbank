import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class Client {
    id: string;
    name: string;
    adress: string;
    fone: string;
    income: number;
    account: Account[];
    manager: Manager;

    constructor(id: string, name: string, adress: string, fone: string, income: number, account: Account, manager: Manager) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.fone = fone;
        this.income = income;
        this.account = [];
        this.manager = manager;
    }
}
