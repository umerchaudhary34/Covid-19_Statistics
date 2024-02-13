import React from 'react';
import Home from '../screens/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Home/Search';

const Stack = createNativeStackNavigator();

const IntroStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{title: 'Home', headerShown: false}}
    />
    <Stack.Screen
      name="Search"
      component={Search}
      options={{title: 'Search', headerShown: false}}
    />
  </Stack.Navigator>
);

export default IntroStack;
