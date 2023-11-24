import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Child from './Component/Child';


function App(): JSX.Element {
  const [data,setData]=useState([]);


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((Response)=>setData(Response.data))
    .catch((err)=>console.log(err))
  },[])

  const renderItem =(({item})=>{
    return (<Child item={item}/>)
  })
  // const DATA =[
  //   {
  //     name:'user-1',
  //     number:8098098450,
  //     id:1
  //   },
  //   {
  //     name:'user-2',
  //     number:8098098450,
  //     id:2
  //url:''
  //   },
  //   {
  //     name:'user-3',
  //     number:8098098450,
  //     id:3
  //   },
  //   {
  //     name:'user-4',
  //     number:8098098450,
  //     id:4
  //   },
  //   {
  //     name:'user-5',
  //     number:8098098450,
  //     id:5
  //   },
  //   {
  //     name:'user-6',
  //     number:8098098450,
  //     id:6
  //   },
  //   {
  //     name:'user-7',
  //     number:8098098450,
  //     id:7
  //   },
  //   {
  //     name:'user-8',
  //     number:8098098450,
  //     id:8
  //   },
  //   {
  //     name:'user-9',
  //     number:8098098450,
  //     id:9
  //   },
  //   {
  //     name:'user-10',
  //     number:8098098450,
  //     id:10
  //   },
  //   {
  //     name:'user-11',
  //     number:8098098450,
  //     id:11
  //   },
  //   {
  //     name:'user-12',
  //     number:8098098450,
  //     id:12
  //   },{
  //     name:'user-13',
  //     number:8098098450,
  //     id:13
  //   },
  //   {
  //     name:'user-14',
  //     number:8098098450,
  //     id:14
  //   },
  //   {
  //     name:'user-15',
  //     number:8098098450,
  //     id:15
  //   },
  //   {
  //     name:'user-16',
  //     number:8098098450,
  //     id:16
  //   },
  //   {
  //     name:'user-17',
  //     number:8098098450,
  //     id:17
  //   },
  //   {
  //     name:'user-18',
  //     number:8098098450,
  //     id:18
  //   },
  //   {
  //     name:'user-19',
  //     number:8098098450,
  //     id:19
  //   },
  //   {
  //     name:'user-20',
  //     number:8098098450,
  //     id:20
  //   },
  //   {
  //     name:'user-21',
  //     number:8098098450,
  //     id:21
  //   },
  //   {
  //     name:'user-22',
  //     number:8098098450,
  //     id:22
  //   },
  //   {
  //     name:'user-23',
  //     number:8098098450,
  //     id:23
  //   },
  //   {
  //     name:'user-24',
  //     number:8098098450,
  //     id:24
  //   },
  //   {
  //     name:'user-25',
  //     number:8098098450,
  //     id:25
  //   },
  //   {
  //     name:'user-26',
  //     number:8098098450,
  //     id:26
  //   },
  //   {
  //     name:'user-27',
  //     number:8098098450,
  //     id:27
  //   },
  //   {
  //     name:'user-28',
  //     number:8098098450,
  //     id:28
  //   },
  //   {
  //     name:'user-29',
  //     number:8098098450,
  //     id:29
  //   },
  //   {
  //     name:'user-30',
  //     number:8098098450,
  //     id:30
  //   },
  //   {
  //     name:'user-31',
  //     number:8098098450,
  //     id:31
  //   },
  //   {
  //     name:'user-32',
  //     number:8098098450,
  //     id:32
  //   },
  //   {
  //     name:'user-33',
  //     number:8098098450,
  //     id:33
  //   },

  // ];

 type ItemProps ={
  name:string;
  number:number;
 };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.Title}>User Post List</Text>
      </View>
      <View style={styles.contactList}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id.toString()}
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Title:{
    fontSize: 20,
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
    fontWeight:'bold',
  },
  Contacts:{
    marginBottom:10,
    paddingVertical:5,
    paddingHorizontal:20,
    // flexDirection:'row',
    // alignItems:'center'
  },
  Name:{
    fontSize:16,
    fontWeight:'bold'
  },
  Number:{
    fontSize:12,
    fontWeight:'bold'
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
  }
});

export default App;
