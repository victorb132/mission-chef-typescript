import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../presentation/screens/Home';
import { useTheme } from 'styled-components';

const Bottom = createBottomTabNavigator();

const IconContainer = ({ children }) => (
  <View style={styles.iconContainer}>{children}</View>
);

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop: 5,
  },
});

const AppNavigator = () => {
  const { colors } = useTheme();

  const renderIcon = (routeName, focused, color, size) => {
    const dotStyle = { ...styles.focusedDot, backgroundColor: colors.accent };

    if (routeName === 'Challenge') {
      return (
        <IconContainer>
          <Ionicons name="fast-food-outline" size={size} color={color} />
          {focused && <View style={dotStyle} />}
        </IconContainer>
      );
    }

    let iconName;
    switch (routeName) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Search':
        iconName = 'search1';
        break;
      case 'Favorite':
        iconName = 'hearto';
        break;
      default:
        iconName = 'question';
    }

    return (
      <IconContainer>
        <AntDesign name={iconName} size={size} color={color} />
        {focused && <View style={dotStyle} />}
      </IconContainer>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Bottom.Navigator
          id={undefined}
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              elevation: 0,
              shadowOpacity: 0,
              height: 60,
              backgroundColor: colors.background,
              borderTopWidth: 0,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.terciaryText,
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarIcon: ({ focused, color, size }) =>
              renderIcon(route.name, focused, color, size),
          })}
        >
          <Bottom.Screen name="Home" component={HomeScreen} />
          <Bottom.Screen name="Search" component={HomeScreen} />
          <Bottom.Screen name="Favorite" component={HomeScreen} />
          <Bottom.Screen name="Challenge" component={HomeScreen} />
        </Bottom.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppNavigator;
