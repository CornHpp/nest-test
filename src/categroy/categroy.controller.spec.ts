import { Test, TestingModule } from '@nestjs/testing';
import { CategroyController } from './categroy.controller';
import { CategroyService } from './categroy.service';

describe('CategroyController', () => {
  let controller: CategroyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategroyController],
      providers: [CategroyService],
    }).compile();

    controller = module.get<CategroyController>(CategroyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
