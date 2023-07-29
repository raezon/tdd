import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Module({
  controllers: [],
  providers: [CalculatorService],
})
export class CalculatorModule {}
