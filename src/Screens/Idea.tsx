import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Idea = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Back</Text>
      </TouchableOpacity>
      <Text>Idea</Text>
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
export default Idea;
