import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule { }
