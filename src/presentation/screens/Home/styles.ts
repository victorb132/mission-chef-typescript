import styled from "styled-components/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${moderateScale(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${moderateScale(28)}px;
  padding-bottom: ${moderateScale(16)}px;
`;

export const HeaderText = styled.Text`
  font-size: ${moderateScale(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ProfileIcon = styled.Image`
  width: ${scale(50)}px;
  height: ${verticalScale(50)}px;
  border-radius: ${moderateScale(25)}px;
`;

export const MealCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${moderateScale(16)}px;
  padding-bottom: ${moderateScale(10)}px;
  border-radius: ${moderateScale(10)}px;
  flex-direction: row;
  align-items: center;
`;

export const MealImage = styled.Image`
  width:${scale(60)}px;
  height: ${verticalScale(60)}px;
  border-radius: ${moderateScale(10)}px;
  margin-right: ${moderateScale(10)}px;
`;

export const MealText = styled.Text`
  font-size: ${moderateScale(16)}px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;