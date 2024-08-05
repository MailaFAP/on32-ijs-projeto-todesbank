import { Module } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { ClientsController } from '../../application/controllers/clients.controller';

@Module({
    controllers: [ClientsController],
    providers: [ClientsService],
    exports: [ClientsService]
})
export class ClientsModule { }
