import { Client } from "src/clients/entities/client.entity";

export class CreateManagerDto {
    private id: string;
    private nameManager: string;
    private clients: Client[];
   
    constructor(id:string, nameManager:string, clients: Client[]){
        this.id = id;
        this.nameManager = nameManager;
        this.clients = clients;
    }

    public get getId(): string {
        return this.id;
    }
    public set setId(value: string) {
        this.id = value;
    }

    public get getNameManager(): string {
        return this.nameManager;
    }
    public set setNameManager(value: string) {
        this.nameManager = value;
    }

    public get getClients(): Client[] {
        return this.clients;
    }
    public set setClients(value: Client[]) {
        this.clients = value;
    }
}
