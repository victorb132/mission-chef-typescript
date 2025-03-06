import { createContext, useEffect, useState } from 'react';
import {
  DefaultTheme,
  ThemeProvider as ThemeProviderStyled,
} from 'styled-components/native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes: Record<ThemeType, DefaultTheme> = {
  dark: darkTheme,
  light: lightTheme,
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem('@theme');
    if (savedTheme) {
      setTheme(savedTheme as ThemeType);
    }
  }

  function toggleTheme() {
    let selectedTheme;

    if (theme === ThemeType.light) {
      selectedTheme = ThemeType.dark;
    } else {
      selectedTheme = ThemeType.light;
    }
    setTheme(selectedTheme);
    AsyncStorage.setItem('@theme', selectedTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
