// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JsonDataRepository } from './orm/json.repository';

@Module({
  providers: [
    UserRepository,
    UserService,
    {
      provide: 'DataRepository', // Use the interface directly as the provide token
      useValue: JsonDataRepository, // Use the JsonDataRepository as the implementation
    },
  ],
})
export class UserModule {}
