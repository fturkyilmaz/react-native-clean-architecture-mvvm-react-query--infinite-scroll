import User from '../../domain/entities/User';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
  getByUserId(userId: number): Promise<User>;
  // N data logically
}
