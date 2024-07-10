import { Account } from "src/accounts/entities/account.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class CreateClientDto {
    id: string;
    name: string;
    adress: string;
    fone: string;
    income: number;
    account: Account[];
    manager: Manager;
  }