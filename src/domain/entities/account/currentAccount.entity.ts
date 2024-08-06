import { v4 as uuidv4 } from 'uuid';
import { AccountType } from '../../enums/type.enum';
import { BanckAccount } from 'src/application/interfaces/banckAccount.interface';



export class CurrentAccount implements BanckAccount {
    id: string;
    balance: number;
    type: AccountType;
    overdraft: 0;

    constructor(id:string, balance:number){
        this.id = uuidv4();
        this.balance = balance;
        this.type = AccountType.CurrentAccount;
    }
    checkBalance(){

    }
    deposit(){

    }
    withdrawMoney(){

    }
    transfer(){

    }
}


