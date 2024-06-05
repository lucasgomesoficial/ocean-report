import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'; 
import Login from './Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
        options={{ headerTitle: '',
        headerShown: false
         }} />
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: '',
        headerShown: false
         }} />
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}