import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[];

  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainingUser = this.users.filter((i) => i.email !== email);
    this.users = remainingUser;
    return remainingUser;
  }
}
