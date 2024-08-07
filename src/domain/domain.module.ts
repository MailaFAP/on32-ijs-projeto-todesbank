import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { AccountsModule } from './models/accounts.module';
import { ClientsModule } from './models/clients.module';
import { ManagersModule } from './models/managers.module';
import { AccountsService } from './services/accounts.service';
import { ManagersService } from './services/managers.service';

@Module({
  providers: [ClientsService, AccountsService, ManagersService],
  exports: [ClientsService, AccountsService, ManagersService]
})
export class DomainModule {}
