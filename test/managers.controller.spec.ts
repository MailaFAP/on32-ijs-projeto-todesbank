import { Test, TestingModule } from '@nestjs/testing';
import { ManagersController } from '../src/managers/managers.controller';
import { ManagersService } from '../src/managers/managers.service';

describe('ManagersController', () => {
  let controller: ManagersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagersController],
      providers: [ManagersService],
    }).compile();

    controller = module.get<ManagersController>(ManagersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
