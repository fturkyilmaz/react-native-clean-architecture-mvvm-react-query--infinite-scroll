import {useEffect, useState} from 'react';
import {User} from '../../domain/entities/User';
import {GetUserUseCase} from '../../domain/usecases/GetUserUseCase';
import {UserRepository} from '../../application/repositories/UserRepository';

export default function useUserViewModel(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userRepository = new UserRepository();
        const getUserUseCase = new GetUserUseCase(userRepository);
        const userResponse = await getUserUseCase.executeById(userId);

        console.log('userResponse', userResponse);

        setUser(userResponse);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return {user, loading};
}
