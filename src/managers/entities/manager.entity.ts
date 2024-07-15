import { Client } from "src/clients/entities/client.entity";

export class Manager {
    private id: string;
    private nameManager: string;
    private clients: Client[];

    constructor(id: string, nameManager: string, clients: Client[]) {
        this.id = id;
        this.nameManager = nameManager;
        this.clients = clients;
    }

    public get getId(): string{
        return this.id;
    }

    public get getNameManager(): string{
        return this.nameManager;
    }

    public get getClients(): Client[]{
        return this.clients;
    }

    public set setNameManager(nameManager: string){
        this.nameManager = nameManager;
    }

    public set setClients(clients: Client[]){
        this.clients = clients;
    }

}
