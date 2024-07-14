import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React from 'react';
import usePokemonViewModel from '../viewModels/PokemonViewModel';
import {Pokemon} from '../../domain/entities/Pokemon';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
const PokemonScreen: React.FC = () => {
  const {
    pokemons,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isRefreshing,
    onRefresh,
  } = usePokemonViewModel();

  if (isFetching && !isFetchingNextPage) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Bir hata oluştu</Text>;
  }

  return (
    <View style={styles.container}>
      <FlashList<Pokemon>
        estimatedItemSize={10}
        data={pokemons}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.image,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />

            <View style={styles.textContainer}>
              <Text style={styles.title} adjustsFontSizeToFit>
                {item.name}
              </Text>
            </View>
          </View>
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.8}
        ListEmptyComponent={
          <View style={styles.listEmptyComponent}>
            <Text>Empty Data</Text>
          </View>
        }
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  listEmptyComponent: {},
  cardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 100, height: 100, marginRight: 10},
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  textContainer: {gap: 5},
});

export default PokemonScreen;
