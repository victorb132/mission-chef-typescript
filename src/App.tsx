import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from '@theme/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
