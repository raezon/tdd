// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JsonDataRepository } from './orm/json.repository';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    UserService,
    {
      provide: 'DataRepository', // Use the interface directly as the provide token
      useClass: JsonDataRepository, // Use the JsonDataRepository as the implementation
    },
  ],
})
export class UserModule {}
