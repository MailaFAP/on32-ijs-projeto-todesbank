import { Manager } from '../../../domain/entities/manager.entity';


export class CreateClientDto {
    name: string;
    adress: string;
    fone: string;
    income: number;
    manager: Manager;
}