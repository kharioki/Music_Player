import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Banner from '../components/Banner';
import Category from '../components/Category';
import Songs from '../components/Songs';

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music App</Text>
      <ScrollView>
        <Banner navigation={navigation} />
        <Category navigation={navigation} />
        <Text style={[styles.title, {marginTop: 0}]}>Songs</Text>
        <Songs navigation={navigation} />
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
});
