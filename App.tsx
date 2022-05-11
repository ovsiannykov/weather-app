/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import Root from './src/navigation/Root';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Root />
      <FlashMessage position="top" color="red" titleStyle={{fontSize: 14}} />
    </Provider>
  );
};

export default App;
