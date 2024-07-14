import {useEffect, useState} from 'react';
import {User} from '../../domain/entities/User';
import {GetUserUseCase} from '../../domain/usecases/GetUserUseCase';
import {UserRepository} from '../../application/repositories/UserRepository';

export default function useUsersViewModel() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userRepository = new UserRepository();

        const getUserUseCase = new GetUserUseCase(userRepository);

        const userResponse = await getUserUseCase.execute();

        console.log('userResponse', userResponse);

        setUsers(userResponse);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return {users, loading};
}
