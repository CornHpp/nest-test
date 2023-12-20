import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../user/dto/login-user.dto';
import { AuthService } from '../auth/auth.service';

@ApiTags('验证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() user: LoginDto, @Req() req) {
    const authenticatedUser = req.user;
    // 通过 AuthService 的 createToken 方法生成 JWT
    const token = await this.authService.createToken(authenticatedUser);
    return token;
  }
}
