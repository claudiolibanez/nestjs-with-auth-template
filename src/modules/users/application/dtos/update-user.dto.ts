import { PartialType } from '@nestjs/mapped-types';

import { CreateUserDto } from 'src/modules/users/application/dtos/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}