import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { ClientsService } from 'src/clients/clients.service';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
	imports: [ClientsModule],
	controllers: [AccountsController],
	providers: [AccountsService, ClientsService],
})
export class AccountsModule { }
