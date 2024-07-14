import {User} from '../../domain/entities/User';
import {UserEntity} from '../../domain/entities/UserEntity';
import {IUserRepository} from '../models/IUserRepository';

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data.map(
      (user: UserEntity) => new User(user.id, user.name, user.email),
    );
  }
  async getByUserId(userId: number): Promise<User> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    const data = await response.json();

    return new User(data.id, data.name, data.email);
  }
}
