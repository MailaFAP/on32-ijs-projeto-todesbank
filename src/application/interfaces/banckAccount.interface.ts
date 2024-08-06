import { AccountType } from "src/domain/enums/type.enum";

export interface BanckAccount{
    id: string,
    balance: number,
    type: AccountType,
    checkBalance():number
    deposit(value: number): void
    withdrawMoney(value: number): void
    transfer(destination: BanckAccount, value: number): void
}