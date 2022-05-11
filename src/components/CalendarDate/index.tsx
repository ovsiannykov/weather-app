import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deafultImage = require('../../assets/question-mark.png');

const CalendarDate = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={['#9566a9', '#395F99']}
        style={styles.calendarItem}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`,
          }}
          defaultSource={deafultImage}
        />
        <Text style={styles.gradus}>{Math.round(props.temp) ?? 'NoN'}°</Text>
        <Text style={styles.desc}>{props.desc}</Text>
        <Text style={styles.date}>{props.date.split(' ')[0]}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  calendarItem: {
    height: 220,
    padding: 15,
    width: 150,
    borderRadius: 35,
    backgroundColor: '#365A91',
    marginHorizontal: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  icon: {
    width: 100,
    height: 70,
  },
  gradus: {
    fontSize: 42,
    color: '#E9F4ED',
    fontWeight: '800',
    marginLeft: 8,
    marginTop: 5,
  },
  desc: {
    color: '#E9F4ED',
    marginTop: 20,
    fontWeight: '700',
    fontSize: 14,
  },
  date: {
    color: '#E9F4ED',
    marginTop: 5,
    fontWeight: '600',
    fontSize: 10,
  },
});

export default CalendarDate;