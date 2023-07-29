import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.getAllUsers();
  }

  async findOne(id: number) {
    return await this.userRepository.getUserById(id);
  }
}
