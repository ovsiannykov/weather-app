import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStack from '../MainStack';
import TimeListScreen from '../../screens/TimeListScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E9F4ED',
        tabBarInactiveTintColor: '#8A919E',
        tabBarStyle: {
          backgroundColor: '#1D314F',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{title: 'Сalendar'}}
      />
      <Tab.Screen
        name="TimeList"
        component={TimeListScreen}
        options={{title: 'Time List'}}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
