import { Module } from '@nestjs/common';
import { CategroyService } from './categroy.service';
import { CategroyController } from './categroy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategroyEntity } from './entities/categroy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategroyEntity])],
  controllers: [CategroyController],
  providers: [CategroyService],
})
export class CategroyModule {}
