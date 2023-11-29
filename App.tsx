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
import api from './Api/api';


function App(): JSX.Element {
  const [data,setData]=useState([]);


  useEffect(()=>{
    axios.get("https://randomuser.me/api/?page=3&results=20")
    .then((Response)=>setData(Response.data))
    .catch((err)=>console.log(err))
  },[])

  // useEffect(()=>{
  //   const userData = async ()=>{
  //     try{
  //       const Response = await api.get('/users')
  //       setData(Response.data);
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  //   userData()
  // }, [])


  

  const renderItem =(({item}:{item:ItemProps})=>{
    return (<Child item={item}/>)
  })

 type ItemProps ={
  name:string;
  number:number;
  id:number;
 };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.Title}>Contact List</Text>
      </View>
      <View>
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
    color:'black'
  },
  Contacts:{
    marginBottom:10,
    paddingVertical:5,
    paddingHorizontal:20,
  }
});

export default App;
