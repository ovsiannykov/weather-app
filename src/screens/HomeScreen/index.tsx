import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import SelectCity from '../../components/SelectCity';

const HomeScreen: React.FC = () => {
  const data: object = useSelector(state => state.wetcher._W);

  console.log(data);

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <View style={styles.wrapper}>
        <SelectCity
          city={data.city.name}
          country={data.city.country}
          temp={(data.list[0].main.temp - 273, 15)}
          icon={data.list[0].weather[0].icon}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: '100%',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
