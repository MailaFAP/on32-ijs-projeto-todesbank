import { Client } from 'src/domain/entities/client.entity';
import { AccountType } from 'src/domain/enums/type.enum';

export class UpdateAccountDto{
    idAccount: string;
    client?: Client;
    typeAccount?: AccountType;
    balance?: number;
    status?: true;
}
