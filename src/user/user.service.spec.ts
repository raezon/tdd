import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('users', () => {
    it('should be found', () => {
      const users = service.findAll();
      expect(users).toBeDefined();
      expect(users).toBeGreaterThan(0);
    });
  });

  describe('user', () => {
    it('user with id number 1 should be found', () => {
      const user = service.findOne(1);
      expect(user).toBeDefined();
      expect(user).toHaveProperty('id', 1);
    });
  });
});
