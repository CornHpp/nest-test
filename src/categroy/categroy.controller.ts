import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategroyService } from './categroy.service';
import { CreateCategroyDto } from './dto/create-categroy.dto';
import { UpdateCategroyDto } from './dto/update-categroy.dto';

@Controller('categroy')
export class CategroyController {
  constructor(private readonly categroyService: CategroyService) {}

  @Post()
  create(@Body() createCategroyDto: CreateCategroyDto) {
    return this.categroyService.create(createCategroyDto);
  }

  @Get()
  findAll() {
    return this.categroyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categroyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategroyDto: UpdateCategroyDto) {
    return this.categroyService.update(+id, updateCategroyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categroyService.remove(+id);
  }
}
