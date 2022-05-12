import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';

import TimeItem from '../../components/TimeItem';

const DetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const thisDate = route.params.date.split(' ')[0];
  const data = route.params.data.filter(
    item => item.dt_txt.split(' ')[0] === thisDate,
  );

  const renderItem = ({item}: any) => (
    <TimeItem
      icon={item.weather[0].icon}
      time={item.dt_txt.split(" ")[1]}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.city}>{route.params.city.name}</Text>
        <Text style={styles.temp}>
          {Math.round(data[0].main.temp - 273.15)}°
        </Text>
        <Text style={styles.desc}>{data[0].weather[0].description}</Text>
      </View>
      <View style={styles.listBox}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.dt}
          renderItem={renderItem}
          style={{marginBottom: 510, paddingBottom: 100}}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    minHeight: '100%',
    paddingHorizontal: 10,
  },
  back: {
    fontSize: 36,
    color: '#E9F4ED',
    marginLeft: 10,
    fontWeight: '700',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  infoContainer: {
    alignItems: 'center',
  },
  temp: {
    fontSize: 122,
    fontWeight: '700',
    color: '#E9F4ED',
    marginLeft: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  city: {
    color: '#E9F4ED',
    fontSize: 22,
    marginTop: 20,
    fontWeight: '200',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  desc: {
    color: '#E9F4ED',
    fontSize: 18,
    fontWeight: '100',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  listBox: {
    marginTop: 20,
  },
});

export default DetailScreen;
