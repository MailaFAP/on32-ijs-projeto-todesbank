import { Client } from "src/clients/entities/client.entity";

export class Manager {
    id: string;
    nameManager: string;
    clients: Client[];
}
