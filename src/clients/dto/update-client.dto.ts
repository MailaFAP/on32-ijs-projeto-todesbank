import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class UpdateClientDto {
    private _id?: string;
    private _name?: string;
    private _adress?: string;
    private _fone?: string;
    private _income?: number;
    private _account?: Account[];
    private _manager?: Manager;
}