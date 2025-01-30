import React from 'react';

import {ShoppingListItem} from './components/ShoppingListItem';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home">
      {props => <ShoppingListItem {...props} name="Coffee" />}
    </Stack.Screen>
  </Stack.Navigator>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
// });

export default App;
