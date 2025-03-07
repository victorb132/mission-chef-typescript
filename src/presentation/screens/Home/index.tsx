import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  ProfileIcon,
  MealCard,
  MealImage,
  HeaderText,
  MealText,
} from './styles';
import { useMealStore } from '@store/useMealStore';
import { useTheme } from 'styled-components';
// import { Switch } from 'react-native-gesture-handler';
// import { ThemeContext, ThemeType } from '@theme/Theme';

const HomeScreen = () => {
  const { meals, isLoading, fetchMeals } = useMealStore();
  const { colors } = useTheme();

  // const { toggleTheme, theme } = useContext(ThemeContext);

  // const isDarkTheme = theme === ThemeType.dark;

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Olá, Usuário</HeaderText>
        {/* <Switch value={isDarkTheme} onValueChange={toggleTheme} /> */}
        <TouchableOpacity onPress={() => {}}>
          <ProfileIcon source={{ uri: 'https://github.com/victorb132.png' }} />
        </TouchableOpacity>
      </Header>

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.textColor} />
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id + item.strMeal}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <MealCard
              // onPress={() =>
              //   navigation.navigate('FoodDetails', { meal: item })
              // }
              >
                <MealImage source={{ uri: item.strMealThumb }} />
                <MealText>{item.strMeal}</MealText>
              </MealCard>
            );
          }}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
