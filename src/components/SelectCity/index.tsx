import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const deafultImage = require('../../assets/question-mark.png')

const SelectCity: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.infoBox, paddingLeft: 20}}>
        <Text style={styles.temp}>{props.temp ?? 'NoN'}°</Text>
        <Text style={styles.city}>
          {props.city ?? 'City'}, {props.country ?? 'World'}
        </Text>
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
    backgroundColor: '#4879C2',
    minHeight: 120,
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
    fontSize: 34,
    color: '#E9F4ED',
    fontWeight: '800',
  },
  infoBox: {
    width: '50%',
  },
  city: {
    marginTop: 5,
    fontSize: 16,
    color: '#E9F4ED',
    fontWeight: '600',
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 25,
  },
});

export default SelectCity;
