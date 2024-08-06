import { BanckAccount } from "./banckAccount.interface";
import { Client } from "./client.interface";

export interface Manager{
    name: string;
    id: string;
    clients: Client[];
    addictionClient(client: Client): void
    removeClient(client: Client): void
    openAccount(client: Client, accountType: string): void
    closeAccount(client: Client, account: BanckAccount): void
    changeTypeAccount(client: Client,account: BanckAccount, newType: string): void
}