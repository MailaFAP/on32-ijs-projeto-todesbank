import { AccountType } from "src/domain/enums/type.enum";

export class CreateAccountDto {
    idClient: string;
    typeAccount: AccountType;
    balance: number;
    status: true;
}

