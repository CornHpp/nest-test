// 应用程序的跟模块
import { Module } from '@nestjs/common';
import { AuthController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import envConfig from '../config/env';
import { PostsEntity } from './posts/posts.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategroyModule } from './categroy/categroy.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局
      envFilePath: [envConfig.path],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',//·登录名
      password: 'han.123456',//密码
      database: 'blog',
      entities: [__dirname + '/**/*.entity[.ts,.js}'],
      synchronize:true,
      autoLoadEntities:true
    }),
    PostsModule,
    UserModule,
    AuthModule,
    CategroyModule,
    TagModule,
  ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule { }
