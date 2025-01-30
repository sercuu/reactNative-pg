import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from '.';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../theme';
import History from './Screens/History';
import {Link, StackActions} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const CounterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        options={{
          title: 'Counter',
          headerRight: () => (
            <Link action={StackActions.push('History')}>
              <FontAwesome5Icon
                name="history"
                size={24}
                color={theme.colorGrey}
              />
            </Link>
          ),
        }}>
        {() => <Counter />}
      </Stack.Screen>
      <Stack.Screen
        name="History"
        options={{
          title: 'History',
        }}>
        {() => <History />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CounterStack;
