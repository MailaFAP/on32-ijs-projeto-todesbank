import { Client } from "src/clients/entities/client.entity";

export class CreateAccountDto {
    private _idAccount: string;
    private _client: Client;
    private _typeAccount: 'CORRENTE'|'POUPANÇA';
    private _balance: number;
    private _status: boolean;

    constructor(idAccount: string, client: Client, typeAccount: 'CORRENTE'|'POUPANÇA', balance: number, status: boolean) {
        this._idAccount = idAccount;
        this._client = client;
        this._typeAccount = typeAccount;
        this._balance = balance;
        this._status = status;
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

