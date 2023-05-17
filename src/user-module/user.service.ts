import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [{ username: '123', email: 'tanhoang0710@gmail.com' }];

  getUsers(): User[] {
    return this.users;
  }

  async getUser(email: string): Promise<User> {
    const userData = this.users[0];

    if (userData) return Promise.resolve(userData);
    throw new NotFoundException('User not found!');
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
