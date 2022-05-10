import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStack from './MainStack';

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <MainStack />
    </NavigationContainer>
  );
};

export default Root;
