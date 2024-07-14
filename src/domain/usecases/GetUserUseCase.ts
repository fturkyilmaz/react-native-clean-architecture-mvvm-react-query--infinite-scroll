import {IUserRepository} from '../../application/models/IUserRepository';
import {User} from '../entities/User';

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }

  async executeById(id: number): Promise<User> {
    return await this.userRepository.getByUserId(id);
  }
}
