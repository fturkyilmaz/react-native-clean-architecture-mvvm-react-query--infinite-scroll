import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import useUserViewModel from '../viewModels/UserViewModel';
import {RootRouteProps} from '../../../App';

export default function UserDetailScreen() {
  const {id} = useRoute<RootRouteProps<'UserDetail'>>()?.params;

  const {user} = useUserViewModel(id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          {user?.id} : {user?.name} {user?.email}
        </Text>
      </View>
    </SafeAreaView>
  );
}
