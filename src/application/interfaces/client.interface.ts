import { Manager } from "src/domain/entities/manager.entity"
import { BankAccount } from "./banckAccount.interface"

export interface IClient{
    name: string,
    idClient: String,
    address: string,
    fone: string,
    income: number,
    accounts: BankAccount[],
    manager: Manager
    openAccount(account: BankAccount): void
    closeAccount(account: BankAccount): void
    changeTypeAccount(account: BankAccount, newType: string): void

}