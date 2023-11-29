import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


const Child = ({item}) => {

  return(
    <View style={styles.Contacts}>
      <View>
        <Image source={{uri: item.image}}
        style={styles.Image} />
      </View>
      <View>
        <Text style={styles.Name}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.Number}>{item.phone}</Text>
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
    alignItems:'center',
    paddingBottom:20,
    paddingTop:20,
  },
  Image:{
    width:70,
    height:70,
    borderRadius:50,
    objectFit:'cover',
    marginRight:10,
    marginLeft:8,
  },
  Name:{
    fontSize:18,
    marginBottom:5,
    fontWeight:'bold',
    marginTop:5,
    color:'black',
    fontFamily:'Roboto-Black'
  },
  Number:{
    fontSize:12,
    fontWeight:'bold',
    color:'black'
  }
});