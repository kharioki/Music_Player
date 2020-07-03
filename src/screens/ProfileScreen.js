import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Profile from '../components/Profile';
import Songs from '../components/Songs';

export default ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <ScrollView>
        <Profile />
        <Text style={[styles.title, {marginTop: 10, fontSize: 18}]}>
          History
        </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
