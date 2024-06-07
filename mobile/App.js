import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home/index';
import Reports from './Reports/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
        options={{ headerTitle: '',
        headerShown: false
         }} />
        <Stack.Screen name="Reports" component={Reports} options={{ headerTitle: '',
        headerShown: false
         }} />
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}