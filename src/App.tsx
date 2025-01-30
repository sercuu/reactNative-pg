import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens';

import Idea from './Screens/Idea';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {theme} from './theme';
import CounterStack from './Screens/Counter/CounterStack';

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
      component={CounterStack}
      options={{
        title: 'Counter',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <AntDesign name="clockcircleo" size={size} color={color} />
        ),
      }}
    />
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
