import { Injectable } from '@nestjs/common';
import { CreateCategroyDto } from './dto/create-categroy.dto';
import { UpdateCategroyDto } from './dto/update-categroy.dto';

@Injectable()
export class CategroyService {
  findById(category: any) {
    throw new Error('Method not implemented.');
  }
  create(createCategroyDto: CreateCategroyDto) {
    return 'This action adds a new categroy';
  }

  findAll() {
    return `This action returns all categroy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categroy`;
  }

  update(id: number, updateCategroyDto: UpdateCategroyDto) {
    return `This action updates a #${id} categroy`;
  }

  remove(id: number) {
    return `This action removes a #${id} categroy`;
  }
}
