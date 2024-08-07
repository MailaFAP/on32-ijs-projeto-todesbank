import { v4 as uuidv4 } from 'uuid';
import { AccountType } from '../../enums/type.enum';
import { BankAccount } from 'src/application/interfaces/banckAccount.interface';


export class CurrentAccount implements BankAccount {
    idBankAccount: string;
    idCurrentAccount: string;
    idClient: string;
    balance: number;
    typeAccount: AccountType;
    overdraft: 0;

    constructor(idClient:string, balance:number){
        this.idCurrentAccount = uuidv4();
        this.idClient = idClient;
        this.balance = balance;
        this.typeAccount = AccountType.CurrentAccount;
    }
    checkBalance(): number{
        return this.balance;
    }

    deposit(value:number): void{
        this.balance += value;
        console.log(`O valor de ${value} foi depositado com Sucesso.`)
        console.log(`saldo total de: ${this.balance}`)
    }
    withdrawMoney(value:number): void{
        const balancePositive = this.balance + this.overdraft >= value;
        if (balancePositive){
            this.balance -= value;
            console.log(`O valor de ${value} foi sacado com Sucesso.`)
            console.log(`saldo total de: ${this.balance}`)
        } else{
            console.log(`O valor de saque :${value} é maior que seu saldo. Operação de saque não realizado`)
        }
    }
    transfer(destination: BankAccount, value:number): void{
        const destinationOfTransfer = destination.idBankAccount;
        const balancePositive = this.balance + this.overdraft >= value;
        const transfer = destination.balance += value;
        if(balancePositive){
            transfer;
            console.log(`O valor de:${value} foi transferido para ${destinationOfTransfer} com sucesso`)
        } else {
            console.log(`O valor de:${value} é maior que seu saldo. Operação não realizada`)
        }
    }
}


