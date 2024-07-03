import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { AccountsModule } from './accounts/accounts.module';
import { ManagersModule } from './managers/managers.module';

@Module({
  imports: [ClientsModule, ClientsModule, AccountsModule, ManagersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
