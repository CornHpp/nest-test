import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  createToken(user: Partial<User>) {
    const payload = { username: user.username, password: user.password };
    return this.jwtService.sign(payload);
  }

  async getUser(user) {
    return await this.userService.findOne(user.id);
  }

  async login(user: Partial<User>) {
    console.log('user', user);
    const token = this.createToken({
      username: user.username,
      password: user.password,
    });

    return { token };
  }
}
