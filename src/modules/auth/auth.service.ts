// auth.service.ts
import { Injectable } from '@nestjs/common';

import { compareSync } from 'bcrypt';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/interface/user.interface';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(public readonly userRepository: UserRepository) {}
  async validateUser(username: string, password: string) {
    const saltRounds = 10; // The number of salt rounds determines the computational cost (higher value means more secure but slower hashing)
    const hashedPassword = await bcrypt.hash('password123', saltRounds);

    const user = this.userRepository.findByUsername(username);
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    console.log(user);

    if (user && isValidPassword) {
      // Password matches, return the user object
      return user;
    }
    // Invalid credentials, return null
    return null;
  }
}
