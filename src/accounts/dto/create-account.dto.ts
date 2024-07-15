import { Client } from "src/clients/entities/client.entity";

export class CreateAccountDto {
    private client: Client;
    private typeAccount: 'CORRENTE' | 'POUPANÇA';
    private balance: number;
    private status: boolean;

    constructor(client: Client, typeAccount: 'CORRENTE' | 'POUPANÇA', balance: number, status: boolean) {
        this.client = client;
        this.typeAccount = typeAccount;
        this.balance = balance;
        this.status = status;
    }

    public get getClient(): Client {
        return this.client;
    }


    public get getTypeAccount(): string {
        return this.typeAccount;
    }

    public set setTypeAccount(typeAccount: 'CORRENTE' | 'POUPANÇA') {
        this.typeAccount = typeAccount;
    }


    public get getBalance(): number {
        return this.balance;
    }

    public set setBalance(balance: number) {
        this.balance = balance;
    }

    public get getStatus(): boolean {
        return this.status;
    }

    public set setStatus(status: boolean) {
        this.status = status;
    }
}

