import { Client } from "src/domain/entities/client.entity";

export class CreateManagerDto {
    private _nameManager: string;
    private _clients: Client[];

    constructor(nameManager: string, clients: Client[]) {
        this._nameManager = nameManager;
        this._clients = clients;
    }

    public get nameManager(): string {
        return this._nameManager;
    }

    public get clients(): Client[] {
        return this._clients;
    }

    public set nameManager(nameManager: string) {
        this._nameManager = nameManager;
    }

    public set clients(clients: Client[]) {
        this._clients = clients;
    }
}
