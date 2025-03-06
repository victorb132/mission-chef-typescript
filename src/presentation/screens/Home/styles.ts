import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f9fa;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 16px;
`;

export const ProfileIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const MealCard = styled.TouchableOpacity`
  background-color: white;
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