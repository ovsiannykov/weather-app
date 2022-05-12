import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import TimeItem from '../../components/TimeItem';
import {defaultData} from '../../constants/data';

const TimeListScreen: React.FC = () => {
  //const data = useSelector(state => state.wetcher);
  const data = defaultData;

  const renderItem = ({item}: any) => (
    <TimeItem
      icon={item.weather[0].icon}
      time={item.dt_txt}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.list}
        keyExtractor={item => item.dt}
        renderItem={renderItem}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
});

export default TimeListScreen;
