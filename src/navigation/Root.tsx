import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabBar from './TabBar';

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <TabBar />
    </NavigationContainer>
  );
};

export default Root;
