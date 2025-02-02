import React from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../theme';
import Icon from 'react-native-vector-icons/AntDesign';

type PropsShoppingListItem = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export function ShoppingListItem({
  name,
  isCompleted = false,
  onDelete,
  onToggleComplete,
}: PropsShoppingListItem) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want delete ${name}!`,
      'it will gonne for good',
      [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => onDelete(),
        },
        {text: 'Cancel', style: 'cancel', onPress: () => {}},
      ],
    );
  };

  return (
    <Pressable
      onPress={() => {
        onToggleComplete();
      }}
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}>
      <Text
        numberOfLines={1} // avoid the multiple line
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}>
        {name}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={handleDelete}>
        <Icon
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {fontSize: 18, fontWeight: 200},

  completedText: {
    textDecorationLine: 'line-through',
    color: theme.colorGrey,
  },
});
