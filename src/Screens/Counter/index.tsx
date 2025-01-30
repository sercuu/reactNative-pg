import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

const Counter = (): React.JSX.Element => {
  const navigation = useNavigation();

  const handlePress = () => {
    // console.log(navigation.getParent());
    navigation.dispatch(StackActions.push('History'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Go to Idea</Text>
      </TouchableOpacity>
      {/* <Link screen="Idea"style={styles.link} >
          <Text>Go to Idea</Text>
        </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  link: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 24,
  },
});

export default Counter;
