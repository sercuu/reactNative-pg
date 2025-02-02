import {ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {ShoppingListItem} from '../components/ShoppingListItem';

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  TextInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: theme.colorWhite,
  },
});
export default Home;
