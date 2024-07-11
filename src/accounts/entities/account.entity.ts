import { Client } from "src/clients/entities/client.entity";

export class Account {
    client: Client;
    typeAccount: 'CORRENTE'|'POUPANÇA';
    balance: number;
    status: boolean;

    constructor(client: Client, typeAccount: 'CORRENTE'|'POUPANÇA', balance: number, status: boolean) {
        this.client = client;
        this.typeAccount = typeAccount;
        this.balance = balance;
        this.status = status;
    }
}

export class CurrentAccount extends Account {
    overdraft: number;

    constructor(client: Client, typeAccount:'CORRENTE', balance: number, status: boolean, overdraft: number) {
        super(client, typeAccount, balance, status);
        this.overdraft = 100.00;
    }
}

export class SavingsAccount extends Account{

    constructor(client: Client, typeAccount: 'POUPANÇA', balance: number, status: boolean) {
        super(client, typeAccount, balance, status)
    }
}
