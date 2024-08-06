import { Manager } from "src/domain/entities/manager.entity"
import { BanckAccount } from "./banckAccount.interface"

export interface Client{
    name: string,
    id: String,
    address: string,
    fone: string,
    income: number,
    accounts: BanckAccount[],
    manager: Manager
    openAccount(account: BanckAccount): void
    closeAccount(account: BanckAccount): void
    changeTypeAccount(account: BanckAccount, newType: string): void

}