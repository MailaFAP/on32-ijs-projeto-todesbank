import { Account } from '../../../domain/entities/account/currentAccount.entity';
import { Manager } from '../../../domain/entities/manager.entity';

export class UpdateClientDto {
    private _id?: string;
    private _name?: string;
    private _adress?: string;
    private _fone?: string;
    private _income?: number;
    private _account?: Account[];
    private _manager?: Manager;
}