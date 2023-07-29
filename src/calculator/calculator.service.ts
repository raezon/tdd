import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { UpdateCalculatorDto } from './dto/update-calculator.dto';

@Injectable()
export class CalculatorService {
  add(a: number, b: number) {
    return a + b;
  }
  substract(a: number, b: number) {
    return a - b;
  }
}
