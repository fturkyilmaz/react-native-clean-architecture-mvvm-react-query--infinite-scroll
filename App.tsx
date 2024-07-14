import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserScreen from './src/presentation/pages/UserScreen';
import {NavigationContainer} from '@react-navigation/native';
import UserDetailScreen from './src/presentation/pages/UserDetailScreen';
import CharacterScreen from './src/presentation/pages/CharacterScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import PokemonScreen from './src/presentation/pages/PokemonScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function MyStack() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pokemon">
          <Stack.Screen name="Pokemon" component={PokemonScreen} />
          <Stack.Screen name="Characters" component={CharacterScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
