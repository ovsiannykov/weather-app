import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import SelectCity from '../../components/SelectCity';
import { setDataFetching } from '../../store/weatcher/weatcher-actions';

const HomeScreen: React.FC = () => {
  const [fetching, setFteching] = useState(true);
  const data = useSelector(state => state.wetcher);

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

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <View style={styles.wrapper}>
        {fetching ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : null}
        <SelectCity
          city={data?.city?.name}
          country={data?.city?.country}
          temp={data && data.list ? (data.list[0].main.temp - 273,15) : null}
          icon={data && data.list ? data.list[0].weather[0].icon : null}
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
  loadingBox: {
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
