import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';
import { describe } from 'node:test';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('add', () => {
    it('it should add two number correctly', () => {
      const result = service.add(2, 3);
      expect(result).toBe(5);
    });
  });

  describe('substract', () => {
    it('it should substract two number correctly', () => {
      const result = service.substract(5, 2);
      expect(result).toBe(3);
    });
  });
});
