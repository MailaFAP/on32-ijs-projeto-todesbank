import { Client } from "src/domain/entities/client.entity";
import { v4 as uuidv4 } from 'uuid';

export class Manager {
    idManager: string;
    nameManager: string;
    clients: Client[];

    constructor(nameManager: string) {
        this.idManager = uuidv4();
        this.nameManager = nameManager;
        this.clients = [];
    }
}
