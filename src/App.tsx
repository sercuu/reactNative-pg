import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens';
import Counter from './Screens/Counter';
import Idea from './Screens/Idea';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from './theme';

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
  <Tabs.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.colorCerulean,
      tabBarInactiveTintColor: theme.colorGrey,
    }}>
    <Tabs.Screen
      name="List"
      options={{
        title: 'List',
        tabBarIcon: ({color, size}) => (
          <Feather name="list" size={size} color={color} />
        ),
      }}>
      {() => <Home />}
    </Tabs.Screen>
    <Tabs.Screen
      name="Counter"
      options={{
        title: 'Counter',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="clockcircleo" size={size} color={color} />
        ),
      }}>
      {() => <Counter />}
    </Tabs.Screen>
    <Tabs.Screen
      name="Idea"
      options={{
        title: 'Idea',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="lightbulb" size={size} color={color} />
        ),
      }}>
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
