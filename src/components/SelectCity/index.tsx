import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const deafultImage = require('../../assets/question-mark.png');

const SelectCity: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.infoBox, paddingLeft: 20}}>
        <Text style={styles.todayText}>Today</Text>
         <Text style={styles.city}>
          {props.city ?? 'City'}, {props.country ?? 'World'}
        </Text>
        <Text style={styles.temp}>{Math.round(props.temp) ?? 'NoN'}°</Text>
        <Text style={styles.desc}>{props.desc ?? 'description'}</Text>
      </View>
      <View style={{...styles.infoBox, alignItems: 'flex-end'}}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`,
          }}
          defaultSource={deafultImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    padding: 15,
    borderRadius: 35,
    backgroundColor: '#274169',
    minHeight: 180,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp: {
    fontSize: 78,
    color: '#E9F4ED',
    fontWeight: '800',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.05,
    elevation: 1,
  },
  infoBox: {
    width: '50%',
  },
  city: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
  },
  icon: {
    width: 140,
    height: 140,
  },
  todayText: {
    color: '#E9F4ED',
    fontSize: 14,
    fontWeight: '800',
  },
  desc: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '600',
  },
});

export default SelectCity;
