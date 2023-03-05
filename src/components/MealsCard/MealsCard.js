import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealsCard.style';

export default function MealsCard({meals, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meals.strMealThumb}} />
        <Text style={styles.title}>{meals.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
