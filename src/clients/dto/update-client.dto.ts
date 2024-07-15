import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class UpdateClientDto {
    private id?: string;
    private name?: string;
    private adress?: string;
    private fone?: string;
    private income?: number;
    private account?: Account[];
    private manager?: Manager;
}