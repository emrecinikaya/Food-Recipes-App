import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.style';

export default function CategoriesCard({categories, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: categories.strCategoryThumb}}
        />
        <Text style={styles.title}>{categories.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
