import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
  } from 'react-native';

const Child = ({item}) => {

  return(
    <View style={styles.Contacts}> 
    <Text><Text style={styles.PostId}>Post ID:</Text> {item.id}</Text>
      <Text><Text style={styles.UserEmail}>User Email Id: </Text>{item.email}</Text>
      <Text style={styles.PostTitle}>Post Title</Text>
      <Text style={styles.Name}>{item.name}</Text>
      <Text style={styles.PostDetails}>Post Detailes</Text>
      <Text style={styles.Postbody}>{item.body}</Text>
    </View>
  )
  }
export default Child

const styles = StyleSheet.create({
  Title:{
    fontSize: 20,
    marginTop:20,
    marginBottom:20,
    textAlign:'center',
    fontWeight:'bold',
  },
  Contacts:{
    marginBottom:20,
    paddingVertical:10,
    paddingHorizontal:20,
    marginHorizontal:20,
    backgroundColor:'#bdc3c7',
    borderRadius:20,
  },
  PostId:{
    fontSize:14,
    fontWeight:'bold'
  },
  PostTitle:{
    textDecorationLine:'underline',
    textAlign:'center',
    marginTop:10,
    fontSize:18,
    fontWeight:'bold'
  },
  UserEmail:{
    fontWeight:'bold',
    fontSize:14
  },
  PostDetails:{
    textAlign:'center',
    marginTop:5,
    fontWeight:'bold',
    fontSize:16,
    marginBottom:5,
    textDecorationLine:'underline'
  },
  Name:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    textTransform:'uppercase',
    marginTop:5
  },
  Number:{
    fontSize:12,
    fontWeight:'bold',
  },
  contactList:{
    paddingBottom:150
  },
  Box:{
    width:50,
    height:50,
    backgroundColor:'green',
    borderRadius:50,
    marginRight:20
  },
  Postbody:{
    textAlign:'center'
  }
});