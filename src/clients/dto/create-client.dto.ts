import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class CreateClientDto {
    private id: string;
    private name: string;
    private adress: string;
    private fone: string;
    private income: number;
    private account: Account[];
    private manager: Manager;

    constructor(id:string, name:string, adress:string, fone:string, income:number, account:Account[], manager:Manager) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.fone = fone;
        this.income = income;
        this.account = account;
        this.manager = manager;
    }

    public get getId(): string{
        return this.id;
    }

    public get getName(): string{
        return this.name;
    }

    public set setName(name:string){
        this.name = name;
    }

    public get getAdress(): string{
        return this.adress;
    }

    public set setAdress(adress:string){
        this.adress = adress;
    }

    public get getFone(): string{
        return this.fone;
    }

    public set setFone(fone:string){
        this.fone = fone;
    }

    public get getIcome(): number{
        return this.income;
    }

    public set setIncome(income:number){
        this.income = income;
    }

    public get getAccount(): Account[]{
        return this.account;
    }

    public set setAccount(account: Account[]){
        this.account = account;
    }

    public get getManager(): Manager{
        return this.manager;
    }

    public set setManager(manager:Manager){
        this.manager = manager;
    }
}