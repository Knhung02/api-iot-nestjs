import { Test, TestingModule } from '@nestjs/testing';
import { IrrigationService } from './irrigation.service';

describe('IrrigationService', () => {
  let service: IrrigationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IrrigationService],
    }).compile();

    service = module.get<IrrigationService>(IrrigationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
