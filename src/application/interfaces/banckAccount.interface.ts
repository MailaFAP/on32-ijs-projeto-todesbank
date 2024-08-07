import { AccountType } from "src/domain/enums/type.enum";

export interface BankAccount{
    idBankAccount: string,
    balance: number,
    typeAccount: AccountType,
    checkBalance():number
    deposit(value: number): void
    withdrawMoney(value: number): void
    transfer(destination: BankAccount, value: number): void
}