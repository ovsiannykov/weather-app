import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import SelectCity from '../../components/SelectCity';
import {setDataFetching} from '../../store/weatcher/weatcher-actions';
import {defaultData} from '../../constants/data';
import CalendarDate from '../../components/CalendarDate';

const HomeScreen: React.FC = () => {
  const [fetching, setFteching] = useState(false);
  //const data = useSelector(state => state.wetcher);

  /*
  ----------------------------------------
  If api not wroking, i saved sample data:
  ----------------------------------------

  1. import {defaultData} from '../../constants/data';
  2. const data = defaultData;

  Thanks!
  */
  const data = defaultData;

  const navigation = useNavigation();
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
      onPress={() =>
        navigation.navigate('Detail', {
          item: item,
          date: item.dt_txt,
          data: data.list,
          city: data.city,
        })
      }
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={fetching} onRefresh={fetchingData} />
        }>
        <View style={styles.wrapper}>
          {fetching ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : null}
          <Text style={styles.wellcomeSubTitle}>Wellcome to</Text>
          <Text style={styles.wellcomeTitle}>WeatcherApp</Text>
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
          <Text style={styles.weekTitle}>This{'  '}Week</Text>
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
    marginTop: 40,
  },
  weekTitle: {
    color: '#E9F4ED',
    fontSize: 38,
    fontWeight: '800',
    marginBottom: 30,
    marginLeft: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  scroll: {
    paddingTop: 100,
    //paddingTop: 130,
  },
  wellcomeSubTitle: {
    color: '#E9F4ED',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
    width: 150,
    marginLeft: 20,
    opacity: 0.3,
  },
  wellcomeTitle: {
    color: '#E9F4ED',
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 30,
    width: 280,
    marginLeft: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export default HomeScreen;
