import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, ProfileIcon, MealCard, MealImage } from './styles';
import { useMealStore } from '../../../store/useMealStore';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { meals, isLoading, fetchMeals } = useMealStore();
  const navigation = useNavigation();

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Container>
      <Header>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Olá, Usuário</Text>
        <TouchableOpacity onPress={() => {}}>
          <ProfileIcon source={{ uri: 'https://github.com/victorb132.png' }} />
        </TouchableOpacity>
      </Header>

      {isLoading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <MealCard
              // onPress={() =>
              //   navigation.navigate('FoodDetails', { meal: item })
              // }
              >
                <MealImage source={{ uri: item.strMealThumb }} />
                <Text style={{ fontSize: 16 }}>{item.strMeal}</Text>
              </MealCard>
            );
          }}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
