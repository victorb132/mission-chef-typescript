import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useMealStore } from '../../store/useMealStore';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

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

// Estilos com Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #f8f9fa;
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 16px;
`;

const ProfileIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const MealCard = styled.TouchableOpacity`
  background-color: white;
  padding-top: 16px;
  padding-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const MealImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;
