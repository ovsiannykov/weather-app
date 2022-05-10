import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen: React.FC = () => {
  const data: object = useSelector(state => state.wetcher._W);

  console.log(data);

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
