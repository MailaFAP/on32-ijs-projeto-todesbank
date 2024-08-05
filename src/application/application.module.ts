import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients.controller';
import { DomainModule } from 'src/domain/domain.module';
import { AccountsController } from './controllers/accounts.controller';
import { ManagersController } from './controllers/managers.controller';

@Module({
  imports: [DomainModule],
  controllers: [ClientsController, AccountsController, ManagersController],
  providers: [],
})
export class ApplicationModule {}
