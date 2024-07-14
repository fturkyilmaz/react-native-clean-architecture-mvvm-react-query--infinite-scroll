import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserScreen from './src/presentation/pages/UserScreen';
import {NavigationContainer} from '@react-navigation/native';
import UserDetailScreen from './src/presentation/pages/UserDetailScreen';
import CharacterScreen from './src/presentation/pages/CharacterScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import PokemonScreen from './src/presentation/pages/PokemonScreen';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function MyStack() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Pokemon"
          screenOptions={{headerTitleStyle: {color: 'black'}}}>
          <Stack.Screen name="Pokemon" component={PokemonScreen} />
          <Stack.Screen name="Characters" component={CharacterScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
