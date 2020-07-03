import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import {Surface} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Tabs from './src/config/router';
import PlayerScreen from './src/screens/PlayerScreen';
import Categories from './src/components/Categories';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  const goToTabs = () => {
    navigation.navigate('Tabs');
  };

  const zoomIn = {
    0: {
      scale: 0,
    },
    0.5: {
      scale: 0.5,
    },
    1: {
      scale: 1,
    },
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Music app</Text>
      <Animatable.Image
        animation={zoomIn}
        source={require('./src/assets/logoImg.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.btn} onPress={() => goToTabs()}>
        <Text style={styles.text}>Start Listening</Text>
      </TouchableOpacity>
    </View>
  );
};

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: '80%',
    marginBottom: 40,
    marginTop: 20,
  },
  btn: {
    width: Dimensions.get('window').width * 0.6,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
