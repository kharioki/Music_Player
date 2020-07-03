import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Banner from '../components/Banner';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music App</Text>
      <Banner />
    </View>
  );
}

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
