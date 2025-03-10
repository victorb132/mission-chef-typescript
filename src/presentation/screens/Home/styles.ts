import styled from "styled-components/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${moderateScale(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${moderateScale(28)}px;
  padding-bottom: ${moderateScale(16)}px;
`;

export const WithoutIcon = styled.View`
  width: ${scale(50)}px;
  height: ${verticalScale(50)}px;
  border-radius: ${moderateScale(50)}px;
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
`;

export const ContainerTextHeader = styled.View`
  flex-direction: column;
`;

export const SubHeaderText = styled.Text`
  font-size: ${moderateScale(14)}px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const HeaderText = styled.Text`
  font-size: ${moderateScale(22)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ProfileIcon = styled.Image`
  width: ${scale(50)}px;
  height: ${verticalScale(50)}px;
  border-radius: ${moderateScale(25)}px;
`;

export const MealCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${moderateScale(30)}px;
  align-items: center;
  justify-content: center;
  height: ${verticalScale(170)}px;
  flex: 0.48;
`;

export const MealImage = styled.Image`
  position: absolute;
  top: ${moderateScale(-50)}px;
  width:${scale(100)}px;
  height: ${verticalScale(100)}px;
  border-radius: ${moderateScale(100)}px;
`;

export const MealText = styled.Text`
  font-size: ${moderateScale(16)}px;
  color: ${({ theme }) => theme.colors.primaryText};
`;