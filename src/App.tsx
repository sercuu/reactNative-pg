import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens';
import Counter from './Screens/Counter';
import Idea from './Screens/Idea';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
    <Stack.Screen name="Counter">{() => <Counter />}</Stack.Screen>
    <Stack.Screen name="Idea">{() => <Idea />}</Stack.Screen>
  </Stack.Navigator>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
