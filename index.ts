import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';

import App from './src/App';
import { registerRootComponent } from 'expo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
