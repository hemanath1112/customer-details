import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Screens/homePage";
import UserList from "./src/Screens/userList";
import Camera from "./src/Screens/cameraPage";
import MapPage from "./src/Screens/mapPage";

const App = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="userList"
          component={UserList}
          options={{ title: "Users Details" }}
        />
        <stack.Screen name="camera" component={Camera} />
        <stack.Screen name="Location" component={MapPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
