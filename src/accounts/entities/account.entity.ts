import { Client } from "src/clients/entities/client.entity";

export class Account {
    client: Client;
    typeAccount: 'CORRENTE'|'POUPANÇA';
    balance: number;
    status: boolean;
}
