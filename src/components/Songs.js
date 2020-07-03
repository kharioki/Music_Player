import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

export default Songs = ({navigation}) => {
  let songs = [
    {
      title: 'Believer',
      subTitle: 'Imagine Dragons',
      duration: 201.6,
      img: require('../assets/s1.jpg'),
    },
    {
      title: 'Hall Of Fame',
      subTitle: 'The Script',
      duration: 201.6,
      img: require('../assets/s2.jpg'),
    },
    {
      title: "It's My Life",
      subTitle: 'Dr. Alban',
      duration: 201.6,
      img: require('../assets/s3.jpg'),
    },
    {
      title: 'Not Afraid',
      subTitle: 'Eminem',
      duration: 201.6,
      img: require('../assets/s4.jpg'),
    },
    {
      title: 'I Will Survive',
      subTitle: 'Gloria Gaynor',
      duration: 201.6,
      img: require('../assets/s5.jpeg'),
    },
  ];

  const playSong = item => {
    navigation.navigate('Player', {item: item});
  };

  const separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 10, paddingTop: 0}}>
        <FlatList
          data={songs}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => separator()}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                style={styles.songContainer}
                onPress={() => playSong(item)}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={item.img} style={styles.img} />
                  <View style={styles.dataContainer}>
                    <Text style={styles.songTitle}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <Text style={styles.subTitle}>{item.duration / 60}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="download"
                      color="gray"
                      size={30}
                      style={{marginRight: 10}}
                    />
                    <Icon
                      name="dots-vertical"
                      color="gray"
                      size={30}
                      style={{marginRight: 10}}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
    elevation: 5,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songTitle: {
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
