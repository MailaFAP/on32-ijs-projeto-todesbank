import { Client } from "src/domain/entities/client.entity";
import { AccountType } from "src/domain/enums/type.enum";

export class CreateAccountDto {
    private _client: Client;
    private _typeAccount: AccountType;
    private _balance: number;
    private _status: boolean;

    constructor(client: Client, typeAccount: AccountType, balance: number, status: boolean) {
        this._client = client;
        this._typeAccount = typeAccount;
        this._balance = balance;
        this._status = status;
    }

    public get client(): Client {
        return this._client;
    }

    
    public get typeAccount(): string {
        return this._typeAccount;
    }

    public set typeAccount(typeAccount: AccountType){
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

