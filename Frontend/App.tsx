import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home/Index';
import WeatherForecast from './src/screens/weatherForecast/Index';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Home} options={{
            title: "",
            headerTransparent: true,
            animationEnabled: true
          }} />

          <Stack.Screen name="previsao" component={WeatherForecast} options={{
            title: "",
            headerTransparent: true,
            animationEnabled: true
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


