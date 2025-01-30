import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

type PropsShoppingListItem = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({
  name,
  isCompleted = false,
}: PropsShoppingListItem) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want delete ${name}!`,
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}>
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}>
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        activeOpacity={0.8}
        onPress={handleDelete}>
        <Icon name="clock-circle" size={24} color={theme.colorRed} />
      </TouchableOpacity>
    </View>
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
    paddingVertical: 8,
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {fontSize: 18, fontWeight: 200},
  button: {
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
  },
  completedButton: {backgroundColor: theme.colorGrey},
  completedText: {
    textDecorationLine: 'line-through',
    color: theme.colorGrey,
  },
});
