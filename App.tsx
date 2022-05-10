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
import { Provider } from 'react-redux';

import Root from './src/navigation/Root';
import store from './src/store';

const App: React.FC = () => {
  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.container}>
    //       <Text>Hello</Text>
    //       <Root />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
