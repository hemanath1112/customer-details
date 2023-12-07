import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const Map_Page = () => {
  const { width, height } = Dimensions.get("window");
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 28.6139, 
    longitude: 77.2090
  });

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.log("Error getting location", error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.MapView}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        zoomEnabled={true}
        zoomControlEnabled={true}
        showsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MapView:{
    flex:1
  }
});

export default Map_Page;
