import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/Screens/Home_Page';
import UserList from './src/Screens/User_List';
import Camera from './src/Screens/Camera_Page';
import Map_Page from './src/Screens/Map_Page';

const App = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'Users Details'}}
        />
        <stack.Screen name="camera" component={Camera} />
        <stack.Screen name='Location' component={Map_Page} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;