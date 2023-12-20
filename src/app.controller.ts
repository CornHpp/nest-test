import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('验证')
@Controller('auth')
export class AuthController {}
