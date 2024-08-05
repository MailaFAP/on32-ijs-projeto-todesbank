import { Client } from '../entities/client.entity';
import { v4 as uuidv4 } from 'uuid';

export class Account {
    private _idAccount: string;
    private _client: Client;
    private _typeAccount: 'CORRENTE'|'POUPANÇA';
    private _balance: number;
    private _status: boolean;

    constructor(client: Client, typeAccount: 'CORRENTE'|'POUPANÇA', balance: number, status: boolean) {
        this._idAccount = uuidv4();
        this._client = client;
        this._typeAccount = typeAccount;
        this._balance = 0;
        this._status = true;
    }

    public get idAccount(): string{
        return this._idAccount;
    }

    public get client(): Client {
        return this._client;
    }

    
    public get typeAccount(): string {
        return this._typeAccount;
    }

    public set typeAccount(typeAccount:'CORRENTE'|'POUPANÇA'){
        this._typeAccount = typeAccount;
    }
    

    public get balance(): number {
        return this._balance;
    }

    public set balance(balance: number){
        this._balance = balance;
    }

    public get status(): boolean {
        return this._status;
    }

    public set status(status: boolean){
        this._status = status;
    }
}

export class CurrentAccount extends Account {
    private _overdraft: number;

    constructor(client: Client, typeAccount:'CORRENTE', balance: number, status: boolean, overdraft: number) {
        super(client, typeAccount, balance, status);
        this._overdraft = 100.00;
    }

    public get overdraft(): number{
        return this._overdraft;
    }

    public set overdraft(overdraft: number){
        this._overdraft = overdraft;
    }
}

export class SavingsAccount extends Account{

    constructor(client: Client, typeAccount: 'POUPANÇA', balance: number, status: boolean) {
        super(client, typeAccount, balance, status)
    }
}
