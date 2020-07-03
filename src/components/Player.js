import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';
import Songs from './Songs';

const {width, height} = Dimensions.get('screen');

export default Player = ({item, navigation}) => {
  const [value, setValue] = useState(0.0);
  const [maxValue, setMaxValue] = useState(0.0);

  this.state = {
    value: 0.0,
    maxValue: 0.0,
  };

  useEffect(() => {
    setMaxValue(item.duration / 60);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{height: height + 60}}>
          <Surface style={styles.surface}>
            <Image source={item.img} style={styles.img} />
          </Surface>
          <View style={styles.dataContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Queue</Text>
          <Songs navigation={navigation} />
        </View>
      </ScrollView>
      <View style={styles.main}>
        <Slider
          value={value}
          minimumValue={0.0}
          maximumValue={maxValue}
          onValueChange={value => setValue(value)}
          thumbStyle={{backgroundColor: '#ff5b77', height: 12, width: 12}}
          thumbTintColor="red"
          maximumTrackTintColor="#e5e5e5"
          minimumTrackTintColor="#ff5b77"
          trackStyle={{backgroundColor: 'red', height: 1}}
        />
        <View style={styles.actions}>
          <Icon name="shuffle-variant" size={35} color="#000" />
          <Icon name="skip-backward" size={35} color="#000" />
          <Icon name="play" size={35} color="#000" />
          <Icon name="skip-forward" size={35} color="#000" />
          <Icon name="sync" size={35} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    height: 60,
    padding: 10,
    paddingTop: 0,
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
  },
});
