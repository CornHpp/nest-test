import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
declare const JwtStorage_base: new (...args: any[]) => Strategy;
export declare class JwtStorage extends JwtStorage_base {
    private readonly userRepository;
    private readonly configService;
    private readonly authService;
    constructor(userRepository: Repository<User>, configService: ConfigService, authService: AuthService);
    validate(user: User): Promise<User>;
}
export {};
