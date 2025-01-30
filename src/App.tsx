/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from './theme';

function App(): React.JSX.Element {
  const handleDelete = () => {
    Alert.alert(
      'Are you sure you want delete this!',
      'it will gonne for good',
      [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            console.log('Ok, Delete it');
          },
        },
        {text: 'Cancel', style: 'cancel', onPress: () => {}},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1a759f',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemText: {fontSize: 18, fontWeight: 200},
  button: {
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    padding: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default App;
