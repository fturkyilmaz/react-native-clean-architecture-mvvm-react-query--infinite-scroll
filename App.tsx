import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserScreen from './src/presentation/pages/UserScreen';
import {
  DefaultTheme,
  NavigationContainer,
  RouteProp,
} from '@react-navigation/native';
import UserDetailScreen from './src/presentation/pages/UserDetailScreen';
import CharacterScreen from './src/presentation/pages/CharacterScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import PokemonScreen from './src/presentation/pages/PokemonScreen';
import {StatusBar} from 'react-native';
import {UserDetailParams} from './src/presentation/types/NavigationType';

const queryClient = new QueryClient();

const theme = Object.freeze({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
});

export type AppStackParams = {
  Pokemon: undefined;
  Characters: undefined;
  User: undefined;
  UserDetail: UserDetailParams;
};
export type RootRouteProps<RouteName extends keyof AppStackParams> = RouteProp<
  AppStackParams,
  RouteName
>;

const Stack = createNativeStackNavigator<AppStackParams>();

export default function MyStack() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <NavigationContainer theme={theme}>
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
