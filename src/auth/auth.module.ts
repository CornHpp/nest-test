import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStorage } from './local.strategy';
import { JwtStorage } from './jwt.strategy';
import { UserService } from '../user/user.service';

const jwtModule = JwtModule.register({
  secret: 'testSecret',
  signOptions: { expiresIn: '4h' },
});

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, jwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStorage, JwtStorage, UserService],
})
export class AuthModule {}
