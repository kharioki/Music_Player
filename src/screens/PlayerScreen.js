import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Player from '../components/Player';

export default PlayerScreen = ({navigation, route}) => {
  let item = route.params.item;

  return (
    <View style={styles.container}>
      <Player navigation={navigation} item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
