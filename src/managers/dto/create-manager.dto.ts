import { Client } from "src/clients/entities/client.entity";

export class CreateManagerDto {
    id: string;
    nameManager: string;
    clients: Client[];
}
