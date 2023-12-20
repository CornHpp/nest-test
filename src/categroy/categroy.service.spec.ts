import { Test, TestingModule } from '@nestjs/testing';
import { CategroyService } from './categroy.service';

describe('CategroyService', () => {
  let service: CategroyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategroyService],
    }).compile();

    service = module.get<CategroyService>(CategroyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
