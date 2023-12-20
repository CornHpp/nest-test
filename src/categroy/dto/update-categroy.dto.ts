import { PartialType } from '@nestjs/swagger';
import { CreateCategroyDto } from './create-categroy.dto';

export class UpdateCategroyDto extends PartialType(CreateCategroyDto) {}
