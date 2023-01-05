/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';

// LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
