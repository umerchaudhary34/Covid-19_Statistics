import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Authentication/Login';
const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{title: 'Login', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;
