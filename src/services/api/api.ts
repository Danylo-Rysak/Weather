import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
});

const key = 'a5a7deac75d945aa6104c6f582ab4a00';

export const weatherAPI = {
  getWeatherInfo(latitude: number | undefined, longitude: number | undefined) {
    return instance.get(`?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);
  },
};
