import { memo, useEffect } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.item.name.first === newProps.item.name.first &&
    oldProps.item.name.last === newProps.item.name.last &&
    oldProps.item.phone === newProps.item.phone &&
    oldProps.item.picture.large === newProps.item.picture.large
  );
}

const Child = ({ item }) => {
  useEffect(() => {
    console.log('Component rendered:', item.name.first, item.name.last);
  }, [item]); 
  return (
    <View style={styles.Contacts}>
      <View>
        <Image source={{ uri: item.picture.large }} style={styles.Image} />
      </View>
      <View>
        <Text style={styles.Name}>{item.name.first} {item.name.last}</Text>
        <Text style={styles.Number}>{item.phone}</Text>
      </View>
    </View>
  );
};

export default memo(Child, arePropsEqual);

const styles = StyleSheet.create({
  Contacts: {
    marginLeft: 12,
    marginRight: 50,
    borderBottomColor: '#dfe6e9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    objectFit: 'cover',
    marginRight: 15,
    marginLeft: 8,
  },
  Name: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
    fontFamily: 'Roboto-Black',
  },
  Number: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});
