import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';
import useUsersViewModel from '../viewModels/UsersViewModel';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParams} from '../../../App';

export default function UserScreen() {
  const {users, loading} = useUsersViewModel();

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  const goToNavigate = (id: number) => {
    navigation.navigate('UserDetail', {id});
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 25, backgroundColor: '#fff'}}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                gap: 5,
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'red',
              }}>
              <Text>{item?.name}</Text>
              <Text>{item?.email}</Text>
              <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <Button
                  title="Detay Görüntüle"
                  onPress={() => goToNavigate(item?.id)}
                />
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
