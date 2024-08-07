import { Client } from "src/domain/entities/client.entity";
import { BankAccount } from "./banckAccount.interface";

export interface IManager{
    name: string;
    idManager: string;
    clients: Client[];
    addictionClient(client: Client): void
    removeClient(client: Client): void
    openAccount(client: Client, accountType: string): void
    closeAccount(client: Client, account: BankAccount): void
    changeTypeAccount(client: Client,account: BankAccount, newType: string): void
}