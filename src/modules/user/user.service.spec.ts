import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JsonDataRepository } from './orm/json.repository';
import { DataRepository } from './interface/data-repository.interface';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        UserService,
        {
          provide: 'DataRepository', // Use the interface directly as the provide token
          useClass: JsonDataRepository, // Use the JsonDataRepository as the implementation
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('users', () => {
    it('should be found', async () => {
      const users = await service.findAll();
      expect(users).toBeDefined();
      expect(Array.isArray(users)).toBe(true); // Add this line to check if users is an array
    });
  });

  describe('user', () => {
    it('user with id number 1 should be found', async () => {
      const user = await service.findOne(1);
      expect(user).toBeDefined();
      expect(user.id).toBe(1); // Add this line to check the 'name' property
      expect(user.username).toBe('John'); // Add this line to check the 'name' property
    });
  });
});
