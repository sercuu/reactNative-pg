import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShoppingListItem} from '../components/ShoppingListItem';
import {Link} from '@react-navigation/native';

const Home = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Link screen="Counter" style={styles.link}>
        <Text>Go to Counter</Text>
      </Link>

      <ShoppingListItem name="coffee" />
      <ShoppingListItem name="tee" isCompleted />
      <ShoppingListItem name="Suger" isCompleted />
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
export default Home;
