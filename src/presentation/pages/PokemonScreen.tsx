import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import usePokemonViewModel from '../viewModels/PokemonViewModel';
import {Pokemon} from '../../domain/entities/Pokemon';

const PokemonScreen: React.FC = () => {
  const {
    pokemons,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePokemonViewModel();

  if (isFetching && !isFetchingNextPage) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Bir hata oluştu</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList<Pokemon>
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image
              source={{
                uri: `https://img.pokemondb.net/artwork/${item.name}.jpg`,
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
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
  title: {fontSize: 20, fontWeight: '800', textTransform: 'capitalize'},
  textContainer: {gap: 5},
});

export default PokemonScreen;
