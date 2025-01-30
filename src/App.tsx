import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens';
import Counter from './Screens/Counter';
import Idea from './Screens/Idea';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();

// const RootStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" options={{title: 'Home'}}>
//       {() => <Home />}
//     </Stack.Screen>
//     <Stack.Screen name="Counter" options={{title: 'Counter'}}>
//       {() => <Counter />}
//     </Stack.Screen>
//     <Stack.Screen name="Idea" options={{title: 'Idea'}}>
//       {() => <Idea />}
//     </Stack.Screen>
//   </Stack.Navigator>
// );

const Tabs = createBottomTabNavigator();

const RootTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" options={{title: 'Home'}}>
      {() => <Home />}
    </Tabs.Screen>
    <Tabs.Screen name="Counter" options={{title: 'Counter'}}>
      {() => <Counter />}
    </Tabs.Screen>
    <Tabs.Screen name="Idea" options={{title: 'Idea'}}>
      {() => <Idea />}
    </Tabs.Screen>
  </Tabs.Navigator>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}

export default App;
