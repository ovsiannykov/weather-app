import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStack from '../MainStack';
import TimeListScreen from '../../screens/TimeListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonics from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

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
        options={{
          title: 'Сalendar',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="TimeList"
        component={TimeListScreen}
        options={{
          title: 'Time List',
          tabBarIcon: ({color}) => (
            <IconIonics name="time-outline" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
