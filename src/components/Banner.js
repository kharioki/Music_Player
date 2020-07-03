import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

export default function Banner() {
  console.disableYellowBox = true;
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
    <View style={styles.container}>
      <FlatList
        data={banners}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.banner} key={index}>
              <ImageBackground source={item.img} style={styles.bannerImage}>
                <TouchableOpacity style={styles.btn}>
                  <Icon name="play" size={18} color="#000" />
                  <Text style={styles.text}>Play Now</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#fff',
    elevation: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: width,
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
});
