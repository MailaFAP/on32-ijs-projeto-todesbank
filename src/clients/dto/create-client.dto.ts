import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class CreateClientDto {
    private _id: string;
    private _name: string;
    private _adress: string;
    private _fone: string;
    private _income: number;
    private _account: Account[];
    private _manager: Manager;

    constructor(id:string, name:string, adress:string, fone:string, income:number, account:Account[], manager:Manager) {
        this._id = id;
        this._name = name;
        this._adress = adress;
        this._fone = fone;
        this._income = income;
        this._account = account;
        this._manager = manager;
    }

    public get id(): string{
        return this._id;
    }

    public get name(): string{
        return this._name;
    }

    public set name(name:string){
        this._name = name;
    }

    public get adress(): string{
        return this._adress;
    }

    public set adress(adress:string){
        this._adress = adress;
    }

    public get fone(): string{
        return this._fone;
    }

    public set fone(fone:string){
        this._fone = fone;
    }

    public get income(): number{
        return this._income;
    }

    public set income(income:number){
        this._income = income;
    }

    public get account(): Account[]{
        return this._account;
    }

    public set account(account: Account[]){
        this._account = account;
    }

    public get manager(): Manager{
        return this._manager;
    }

    public set manager(manager:Manager){
        this._manager = manager;
    }
}