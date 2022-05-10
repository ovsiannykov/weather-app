import {opendataKey} from '../constants/apiKeys';
import axios from 'axios';

export const fetchData = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: {q: 'san francisco,us'},
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': opendataKey,
      },
    };

    let res = await axios.request(options);

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
