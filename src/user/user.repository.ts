import { Inject, Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { DataRepository } from './interface/data-repository.interface';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('DataRepository')
    private readonly dataRepository: DataRepository<User>,
  ) {}

  getAllUsers(): User[] {
    return this.dataRepository.getAll();
  }

  getUserById(id: number): User | null {
    return this.dataRepository.getById(id);
  }
}
