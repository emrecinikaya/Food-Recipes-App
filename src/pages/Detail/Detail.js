import {View, Text, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Detail.style';

export default function Detail({route}) {
  const {idMeal} = route.params;

  const {loading, data, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (

    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: data.meals[0].strMealThumb}} />
      <Text style={styles.title}>{data.meals[0].strMeal}</Text>
      <Text style={styles.area}>{data.meals[0].strArea}</Text>
      <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(data.meals[0].strYoutube);
        }}>
        <Text style={styles.text}>Watch On YouTube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
