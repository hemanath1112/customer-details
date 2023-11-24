import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Image,
  } from 'react-native';

const Child = ({item}) => {

  return(
    <View style={styles.Contacts}>
      <View>
      <Image source={{uri: 'https://i.pinimg.com/564x/e6/3a/12/e63a1274d16ece550d0886e481cad659.jpg'}}
       style={styles.Image} />
      </View>
      <View>
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.Number}>{item.number}</Text>
      </View>
    </View>
  )
  }
export default Child

const styles = StyleSheet.create({
  Contacts:{
    marginLeft:12,
    marginRight:50,
    borderBottomColor:'#dfe6e9',
    borderBottomWidth:1,
    flexDirection:'row',
    paddingBottom:20,
    paddingTop:20,
    
  },
  Image:{
    width:70,
    height:70,
    borderRadius:50,
    objectFit:'cover',
    marginRight:20,
    marginLeft:8,
  },
  Name:{
    fontSize:20,
    marginBottom:5,
    fontWeight:'bold',
    marginTop:5,
    color:'black',
    fontFamily:'Roboto-italic'
  },
  Number:{
    fontSize:12,
    fontWeight:'bold',
    color:'black'
  },
});