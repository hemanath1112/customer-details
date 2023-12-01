import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/Home';
import SecondPage from './src/SecondPage';
import Camera from './src/Camera';

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
          name="Secondpage"
          component={SecondPage}
          options={{title: 'List Item'}}
        />
        <stack.Screen name="camera" component={Camera} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
