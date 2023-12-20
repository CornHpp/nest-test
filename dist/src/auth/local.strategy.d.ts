import { Strategy } from 'passport-local';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
declare const LocalStorage_base: new (...args: any[]) => Strategy;
export declare class LocalStorage extends LocalStorage_base {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(username: string, password: string): Promise<User>;
}
export {};
