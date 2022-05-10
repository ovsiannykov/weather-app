import {opendataKey} from '../constants/apiKeys';
import axios from 'axios';

export const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: {q: 'san francisco,us'},
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': opendataKey,
    },
  };

  let response = await axios.request(options);

  if (response.status === 200) {
    return response.data.list;
  } else {
    return 'Opps';
  }
};
