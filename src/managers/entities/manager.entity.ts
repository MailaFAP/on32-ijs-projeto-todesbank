import { Client } from "src/clients/entities/client.entity";

export class Manager {
    id: string;
    nameManager: string;
    clients: Client[];

    constructor(id: string, nameManager: string, clients: Client) {
        this.id = id;
        this.nameManager = nameManager;
        this.clients = [];
    }
}
