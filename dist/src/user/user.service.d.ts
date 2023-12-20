import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(createUser: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<User>;
}
