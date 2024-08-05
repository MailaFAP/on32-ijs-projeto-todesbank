import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from '../../dtos/account/create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
