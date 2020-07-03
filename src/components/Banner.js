import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';

export default function Banner() {
  let banners = [
    {
      id: 1,
      title: 'Metal City',
      subTitle: 'Dead April',
      img: require('../assets/b1.jpg'),
      duration: 201.6,
    },
    {
      id: 2,
      title: 'Return To Forever',
      subTitle: '',
      img: require('../assets/b2.jpg'),
      duration: 201.6,
    },
    {
      id: 3,
      title: 'Your Love Remains',
      subTitle: 'The Rock Music',
      img: require('../assets/b4.jpg'),
      duration: 201.6,
    },
  ];
  return (
    <View>
      <FlatList
        data={banners}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.banner} key={index}>
              <ImageBackground
                source={item.img}
                style={styles.bannerImage}></ImageBackground>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {},
  bannerImage: {
    height: 250,
    width: '100%',
  },
});
