import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Category';
import Songs from '../components/Songs';

const {width} = Dimensions.get('window');

export default Discover = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter text here..." />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon name="ios-search" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 0}]}>Recently Searched</Text>
        <Songs navigation={navigation} />
        <Category navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    color: '#000',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginLeft: 10,
    marginRight: 5,
    fontSize: 18,
  },
  searchBtn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
  },
});
