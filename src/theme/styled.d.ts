import 'styled-components';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme | typeof darkTheme;

  export interface DefaultTheme extends ThemeType { }
}
