import { Manager } from '../../../domain/entities/manager.entity';

export class UpdateClientDto {
    id: string;
    name?: string;
    adress?: string;
    fone?: string;
    income?: number;
    manager?: Manager;
}