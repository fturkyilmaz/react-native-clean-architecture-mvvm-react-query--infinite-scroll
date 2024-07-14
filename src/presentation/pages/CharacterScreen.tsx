import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import useCharacterViewModel from '../viewModels/CharacterViewModel';
import {Character} from '../../domain/entities/Character';

const CharacterScreen: React.FC = () => {
  const {
    characters,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCharacterViewModel();

  if (isFetching && !isFetchingNextPage) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Bir hata oluştu</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList<Character>
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image
              source={{uri: item.image}}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>
                {item.species} - {item.status}
              </Text>
            </View>
          </View>
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  cardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 100, height: 100, marginRight: 10},
  title: {fontSize: 20, fontWeight: '800', color: '#000'},
  description: {fontSize: 14, fontWeight: '400', color: '#000'},
  textContainer: {gap: 5},
});

export default CharacterScreen;
