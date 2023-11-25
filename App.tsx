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
    axios.get("https://mocki.io/v1/90c2f51b-6c45-497a-84a0-33c198ff6910")
    .then((Response)=>setData(Response.data))
    .catch((err)=>console.log(err))
  },[])

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
