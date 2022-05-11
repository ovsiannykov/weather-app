import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const deafultImage = require('../../assets/question-mark.png');

const TimeItem: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.infoBox, paddingLeft: 20}}>
        <Text style={styles.time}>{props.time.split(" ")[1]}</Text>
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
    backgroundColor: '#2A4670',
    height: 140,
    marginBottom: 15,
    padding: 15,
    borderRadius: 35,
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
    fontSize: 52,
    color: '#E9F4ED',
    fontWeight: '800',
  },
  infoBox: {
    alignItems: 'center',
  },
  city: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
  },
  icon: {
    width: 120,
    height: 120,
  },
  time: {
    color: '#E9F4ED',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: -10,
  },
  desc: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
    marginLeft: -10,
  },
});

export default TimeItem;
