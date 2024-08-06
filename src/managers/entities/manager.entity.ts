import { Client } from "src/clients/entities/client.entity";
import { v4 as uuidv4 } from 'uuid';

export class Manager {
    private _id: string;
    private _nameManager: string;
    private _clients: Client[];

    constructor(nameManager: string, clients: Client[]) {
        this._id = uuidv4();
        this._nameManager = nameManager;
        this._clients = clients;
    }

    public get id(): string{
        return this._id;
    }

    public get nameManager(): string{
        return this._nameManager;
    }

    public get clients(): Client[]{
        return this._clients;
    }

    public set nameManager(nameManager: string){
        this._nameManager = nameManager;
    }

    public set clients(clients: Client[]){
        this._clients = clients;
    }

}
