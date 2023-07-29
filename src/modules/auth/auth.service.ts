// auth.service.ts
import { Injectable } from '@nestjs/common';

import { compareSync } from 'bcrypt';
import { User } from '../user/interface/user.interface';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(public readonly userRepository: UserRepository) {}
  validateUser(username: string, password: string): User | null {
    const user = this.userRepository.find((u) => u.username === username);
    if (user && compareSync(password, user.password)) {
      // Password matches, return the user object
      return user;
    }
    // Invalid credentials, return null
    return null;
  }
}
