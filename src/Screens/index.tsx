import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {ShoppingListItem} from '../components/ShoppingListItem';
import {Link} from '@react-navigation/native';
import {theme} from '../theme';

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};

const initialList: ShoppingListItemType[] = [
  {
    id: '1',
    name: 'Coffee',
  },
  {
    id: '2',
    name: 'Tee',
    isCompleted: true,
  },
  {
    id: '3',
    name: 'Sugar',
    isCompleted: true,
  },
];

const Home = (): React.JSX.Element => {
  const [value, setValue] = useState('');
  const [list, setList] = useState<ShoppingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (value) {
      setList(prevState => {
        return [{name: value, id: new Date().toDateString()}, ...prevState];
      });
      setValue('');
    }
  };
  return (
    <View style={styles.container}>
      <Link screen="Counter" style={styles.link}>
        <Text>Go to Counter</Text>
      </Link>
      <TextInput
        value={value}
        style={styles.TextInput}
        placeholder="E.g Coffee"
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {list.map(item => (
        <ShoppingListItem
          name={item.name}
          key={item.id}
          isCompleted={item.isCompleted}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  link: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 24,
  },
  TextInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    borderRadius: 15,
  },
});
export default Home;
