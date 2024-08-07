import { Module } from '@nestjs/common';
import { ManagersService } from '../services/managers.service';
import { ManagersController } from '../../application/controllers/managers.controller';

@Module({
    controllers: [ManagersController],
    providers: [ManagersService],
})
export class ManagersModule { }
