import { BankAccount } from "src/application/interfaces/banckAccount.interface";
import { AccountType } from "src/domain/enums/type.enum";
import { v4 as uuidv4 } from 'uuid';

export class SavingsAccount implements BankAccount{
    idBankAccount: string;
    idSavingsAccount: string;
    idClient: string;
    balance: number;
    typeAccount: AccountType;
    interestRate: number;

    constructor(idClient: string, balance:number){
        this.idClient = idClient;
        this.idSavingsAccount = uuidv4();
        this.balance = balance;
        this.typeAccount = AccountType.SavingsAccount;
        this.interestRate = this.interestRate;
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
        const balancePositive = this.balance >= value;
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
        const balancePositive = this.balance >= value;
        const transfer = destination.balance += value;
        if(balancePositive){
            transfer;
            console.log(`O valor de:${value} foi transferido para ${destinationOfTransfer} com sucesso`)
        } else {
            console.log(`O valor de:${value} é maior que seu saldo. Operação não realizada`)
        }
    }
    calcularTaxa(){

    }

}