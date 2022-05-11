import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import SelectCity from '../../components/SelectCity';
import {setDataFetching} from '../../store/weatcher/weatcher-actions';
import {defaultData} from '../../constants/data';
import CalendarDate from '../../components/CalendarDate';

const HomeScreen: React.FC = () => {
  const [fetching, setFteching] = useState(true);
  //const data = useSelector(state => state.wetcher);
  const data = defaultData;

  //console.log(data);

  const dispatch = useDispatch();

  const fetchingData = async () => {
    setFteching(true);
    await dispatch(setDataFetching());
    setFteching(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const renderItem = ({item}: any) => (
    <CalendarDate
      icon={item.weather[0].icon}
      date={item.dt_txt}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {fetching ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : null}
          <SelectCity
            city={data?.city?.name}
            country={data?.city?.country}
            temp={data && data.list ? data.list[0].main.temp - 273.15 : null}
            icon={data && data.list ? data.list[0].weather[0].icon : null}
            desc={
              data && data.list ? data.list[0].weather[0].description : null
            }
          />
        </View>
        <View style={styles.listBox}>
          <Text style={styles.weekTitle}>Next{'  '}Week</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.list.filter(
              item => item.dt_txt.split(' ')[1] === '15:00:00',
            )}
            keyExtractor={item => item.dt}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 10,
  },
  loadingBox: {
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBox: {
    width: '100%',
    paddingLeft: 10,
    marginTop: 40,
  },
  weekTitle: {
    color: '#E9F4ED',
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 40,
    marginLeft: 20,
  },
  scroll: {
    paddingTop: 100,
  },
});

export default HomeScreen;
