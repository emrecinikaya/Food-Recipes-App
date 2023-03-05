import {View, FlatList} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch/useFetch';
import MealsCard from '../../components/MealsCard';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Meals.style';

export default function Meals({navigation, route}) {
  const {category} = route.params;

  const {loading, data, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category,
  );

  const handleProductSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderMeals = ({item}) => (
    <MealsCard meals={item} onSelect={() => handleProductSelect(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
}
