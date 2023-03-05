import {FlatList, View} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch/useFetch';
import CategoriesCard from '../../components/CategoriesCard';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Categories.style';

export default function Categories({navigation}) {
  const {loading, data, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  const handleProductSelect = category => {
    navigation.navigate('MealsPage', {category});
  };

  const renderCategories = ({item}) => (
    <CategoriesCard
      categories={item}
      onSelect={() => handleProductSelect(item.strCategory)}
    />
  );
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
}
