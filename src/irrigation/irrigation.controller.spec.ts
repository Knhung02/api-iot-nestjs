import { Test, TestingModule } from '@nestjs/testing';
import { IrrigationController } from './irrigation.controller';

describe('IrrigationController', () => {
  let controller: IrrigationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IrrigationController],
    }).compile();

    controller = module.get<IrrigationController>(IrrigationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
