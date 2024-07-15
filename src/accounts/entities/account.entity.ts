import { Client } from "src/clients/entities/client.entity";

export class Account {
    private idAccount: string;
    private client: Client;
    private typeAccount: 'CORRENTE'|'POUPANÇA';
    private balance: number;
    private status: boolean;

    constructor(client: Client, typeAccount: 'CORRENTE'|'POUPANÇA', balance: number, status: boolean) {
        this.client = client;
        this.typeAccount = typeAccount;
        this.balance = balance;
        this.status = status;
    }

    public get getIdAccount(): string{
        return this.idAccount;
    }

    public get getClient(): Client {
        return this.client;
    }

    
    public get getTypeAccount(): string {
        return this.typeAccount;
    }

    public set setTypeAccount(typeAccount:'CORRENTE'|'POUPANÇA'){
        this.typeAccount = typeAccount;
    }
    

    public get getBalance(): number {
        return this.balance;
    }

    public set setBalance(balance: number){
        this.balance = balance;
    }

    public get getStatus(): boolean {
        return this.status;
    }

    public set setStatus(status: boolean){
        this.status = status;
    }
}

export class CurrentAccount extends Account {
    private overdraft: number;

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
