import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerDto } from '../../dtos/manager/create-manager.dto';

export class UpdateManagerDto extends PartialType(CreateManagerDto) {}
