import {opendataKey} from '../constants/apiKeys';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

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

    console.log(res);

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      showMessage({
        message: 'Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: `Opps.. ${error.message}`,
      type: 'danger',
    });
  }
};
