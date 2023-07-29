// json.data.repository.ts
import { Injectable } from '@nestjs/common';

import { readFileSync, writeFileSync } from 'fs';
import { User } from '../interface/user.interface';
import { DataRepository } from '../interface/data-repository.interface';

@Injectable()
export class JsonDataRepository implements DataRepository<User> {
  private readonly dataPath = '../../database/user.json';

  private getData(): any {
    const rawData = readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(rawData);
  }

  private updateData(data: any): void {
    writeFileSync(this.dataPath, JSON.stringify(data, null, 2), 'utf-8');
  }

  getAll(): User[] {
    const data = this.getData();
    return data.users;
  }

  getById(id: number): User | null {
    const data = this.getData();
    const user = data.users.find((user: User) => user.id === id);
    return user || null;
  }
}
