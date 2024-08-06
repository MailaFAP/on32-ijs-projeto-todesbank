import { BanckAccount } from "src/application/interfaces/banckAccount.interface";
import { AccountType } from "src/domain/enums/type.enum";

export class SavingsAccount implements BanckAccount{
    id: string;
    balance: number;
    type: AccountType;
    interestRate: number;

    constructor(id:string, balance:number){
        this.id = id;
        this.balance = balance;
        this.type = AccountType.SavingsAccount;
        this.interestRate = this.interestRate;
    }
    checkBalance(){

    }
    deposit(){

    }
    withdrawMoney(){

    }
    transfer(){

    }
    calcularTaxa(){

    }

}