import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


const Home = ({ navigation }) => {
  const goToUserListPage = () => {
    navigation.navigate("userList");
  };
  const goToCameraPage = () => {
    navigation.navigate("camera");
  };
  const goToLocationPage = () => {
    navigation.navigate("Location");
  };

  return (
    <View style={styles.Home}>
      <View>
        <TouchableOpacity style={styles.ListItems} onPress={goToUserListPage}>
          <Text style={styles.Text}>User Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ListItems} onPress={goToCameraPage}>
          <Text style={styles.Text}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ListItems} onPress={goToLocationPage}>
          <Text style={styles.Text}>Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  ListItems: {
    fontSize: 20,
    backgroundColor: "#e67e22",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  
  },
  Text:{
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  }
});
