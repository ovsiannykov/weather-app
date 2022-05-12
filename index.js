/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Found screens with the same name nested inside one another. Check:',
]);

AppRegistry.registerComponent(appName, () => App);
