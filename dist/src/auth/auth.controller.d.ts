import { LoginDto } from '../user/dto/login-user.dto';
import { AuthService } from '../auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginDto, req: any): Promise<string>;
}
