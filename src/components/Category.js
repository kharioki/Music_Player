import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

export default Category = props => {
  let categories = [
    {
      name: 'Rock',
      img: require('../assets/c1.jpg'),
    },
    {
      name: 'Metal',
      img: require('../assets/c2.jpg'),
    },
    {
      name: 'Rock',
      img: require('../assets/c3.jpg'),
    },
    {
      name: 'Jazz',
      img: require('../assets/c4.jpg'),
    },
    {
      name: 'Classic',
      img: require('../assets/c5.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={categories}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback>
              <Surface style={styles.surfaceItem}>
                <ImageBackground
                  source={item.img}
                  style={styles.img}
                  blurRadius={3}>
                  <Icon name="music" color="#fff" size={22} />
                  <Text style={styles.name}>{item.name}</Text>
                </ImageBackground>
              </Surface>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  surfaceItem: {
    elevation: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: 'hidden',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
