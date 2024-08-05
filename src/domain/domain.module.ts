import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { AccountsModule } from './models/accounts.module';
import { ClientsModule } from './models/clients.module';
import { ManagersModule } from './models/managers.module';

@Module({
  imports: [AccountsModule, ClientsModule, ManagersModule],
  providers: [ClientsService],
  exports: [ClientsService]
})
export class DomainModule {}
