import {
  FlatList,
  LayoutAnimation,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ShoppingListItem} from '../components/ShoppingListItem';

import {theme} from '../theme';
import {Text} from 'react-native';
import {getFromStorage, saveToStorage} from '../utils/storage';

export type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimeStamp?: number;
  lastUpdatedTimestamp: number;
};

function orderShoppingList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
      return item2.completedAtTimeStamp - item1.completedAtTimeStamp;
    }

    if (item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
      return 1;
    }

    if (!item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
      return -1;
    }

    if (!item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
      return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    }

    return 0;
  });
}

const storage_key = 'shoppingList';

const Home = (): React.JSX.Element => {
  const [value, setValue] = useState('');
  const [list, setList] = useState<ShoppingListItemType[]>([]);

  const handleSubmit = () => {
    if (value) {
      const newList = [
        ...list,
        {
          name: value,
          id: new Date().toTimeString(),
          lastUpdatedTimestamp: Date.now(),
        },
      ];

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setList(newList);
      saveToStorage(storage_key, newList);
      setValue('');
    }
  };
  const handleDelete = (id: string) => {
    const newShoppingList = list.filter(item => item.id !== id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setList(newShoppingList);
    saveToStorage(storage_key, newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newList = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          lastUpdatedTimestamp: Date.now(),
          completedAtTimeStamp: item.completedAtTimeStamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setList(newList);
    saveToStorage(storage_key, newList);
  };

  useEffect(() => {
    const fetchInitialList = async () => {
      const data = await getFromStorage(storage_key);
      console.log({data});
      if (data) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setList(data);
      }
    };
    fetchInitialList();
  }, []);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      data={orderShoppingList(list)}
      ListEmptyComponent={() => (
        <View style={styles.emptyListContainer}>
          <Text>Your list is empty!</Text>
        </View>
      )}
      renderItem={({item}) => (
        <ShoppingListItem
          name={item.name}
          key={item.id}
          isCompleted={!!item.completedAtTimeStamp}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
        />
      )}
      ListHeaderComponent={
        <TextInput
          value={value}
          style={styles.TextInput}
          placeholder="E.g Coffee"
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
    />
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
  emptyListContainer: {justifyContent: 'center', alignItems: 'center'},
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
