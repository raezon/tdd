// json.data.repository.ts
import { Injectable } from '@nestjs/common';

import { readFileSync, writeFileSync } from 'fs';
import { User } from '../interface/user.interface';
import { DataRepository } from '../interface/data-repository.interface';
import { join } from 'path';

@Injectable()
export class JsonDataRepository implements DataRepository<User> {
  private readonly dataPath = join('./src/database/user.json');

  private getData(): any {
    const rawData = readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(rawData);
  }

  getAll(): User[] {
    const data = this.getData();
    console;
    return data.users;
  }

  getById(id: number): User | null {
    const data = this.getData();
    const user = data.users.find((user) => user.id == id);
    return user || null;
  }
}
