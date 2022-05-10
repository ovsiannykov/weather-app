import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen: React.FC = () => {
  const state = useSelector(state => state.wetcher);
  console.log(state);

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
