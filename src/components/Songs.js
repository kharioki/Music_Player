import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const Song = ({item, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const playSong = item => {
    navigation.navigate('Player', {item: item});
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        transparent={true}
        onRequestClose={() => closeModal()}
        visible={modalVisible}
        animationType="slide">
        <View style={styles.modal}>
          <Surface style={styles.surface}>
            <Image source={item.img} style={styles.modalImg} />
          </Surface>
          <View style={styles.modalData}>
            <View style={styles.option}>
              <Icon name="heart-plus-outline" size={30} color="#ff5b77" />
              <Text style={styles.text}>Add To Favorites</Text>
            </View>
            <View style={styles.option}>
              <Icon name="playlist-plus" size={30} color="#000" />
              <Text style={styles.text}>Add To Playlist</Text>
            </View>
            <View style={styles.option}>
              <Icon name="album" size={30} color="#000" />
              <Text style={styles.text}>Create Album</Text>
            </View>
            <View style={styles.option}>
              <Icon name="download" size={30} color="#000" />
              <Text style={styles.text}>Download</Text>
            </View>
          </View>
        </View>
      </Modal>
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
            <TouchableOpacity onPress={() => openModal()}>
              <Icon
                name="dots-vertical"
                color="gray"
                size={30}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Songs = props => {
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
            return <Song item={item} navigation={props.navigation} />;
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
  modal: {
    height: '43%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    overflow: 'hidden',
    top: -100,
    position: 'absolute',
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
});
