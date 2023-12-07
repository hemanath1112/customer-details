import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const GoSecondPage = () => {
    navigation.navigate('UserList');
  };
  const GoCamera = () => {
    navigation.navigate('camera');
  };
  const GoToLocationPage = ()=>{
    navigation.navigate('Location')
  }

  return (
    <View style={styles.Home}>
      <View>
        <Text onPress={GoSecondPage} style={styles.ListItems}>
          ListItem
        </Text>
        <Text style={styles.CameraItem} onPress={GoCamera}>
          Camera
        </Text>
        <Text style={styles.ListItems} onPress={GoToLocationPage}>Location</Text>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  ListItems: {
    fontSize: 20,
    backgroundColor: '#e67e22',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  CameraItem: {
    fontSize: 20,
    backgroundColor: '#e67e22',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
