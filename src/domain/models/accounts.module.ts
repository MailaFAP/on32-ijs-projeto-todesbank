import { Module } from '@nestjs/common';
import { AccountsService } from '../services/accounts.service'
import { AccountsController } from '../../application/controllers/accounts.controller';
import { ClientsService } from '../services/clients.service';
import { ClientsModule } from '../models/clients.module';

@Module({
	imports: [ClientsModule],
	controllers: [AccountsController],
	providers: [AccountsService],
})
export class AccountsModule { }
