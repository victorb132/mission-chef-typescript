import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 16px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ProfileIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const MealCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 16px;
  padding-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const MealImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const MealText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;