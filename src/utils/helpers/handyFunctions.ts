import clearSky from '@assets/svg/clearSky.svg';
import fewClouds from '@assets/svg/fewClouds.svg';
import scatteredClouds from '@assets/svg/scatteredClouds.svg';
import brokenClouds from '@assets/svg/brokenСlouds.svg';
import showerRain from '@assets/svg/showerRain.svg';
import rain from '@assets/svg/rain.svg';
import snow from '@assets/svg/snow.svg';

export const setDayPartName = (dataTime: string): string => {
  if (dataTime === ' 06:00' || dataTime === ' 09:00') {
    return 'Morning';
  } else if (dataTime === ' 12:00' || dataTime === ' 15:00') {
    return 'Day';
  } else if (dataTime === ' 18:00' || dataTime === ' 21:00') {
    return 'Evening';
  } else if (dataTime === ' 00:00' || dataTime === ' 03:00') {
    return 'Night';
  }
  return '';
};

export const setWeatherIcon = (icon: string): string => {
  if (icon === '01d' || icon === '01n') {
    return clearSky;
  } else if (icon === '02d' || icon === '02n') {
    return fewClouds;
  } else if (icon === '03d' || icon === '03n') {
    return scatteredClouds;
  } else if (icon === '04d' || icon === '04n') {
    return brokenClouds;
  } else if (icon === '09d' || icon === '09n') {
    return showerRain;
  } else if (icon === '10d' || icon === '10n') {
    return rain;
  } else if (icon === '11d' || icon === '11n') {
    return '';
  } else if (icon === '13d' || icon === '13n') {
    return snow;
  } else if (icon === '50d' || icon === '50n') {
    return '';
  }
  return '';
};

export const isPositiveInfoValue = (value: number): string | number => {
  if (value > 0) {
    return '+' + value;
  } else {
    return value;
  }
};

export const countDayParts = (dataTime: string): number => {
  return (24 - Number(dataTime)) / 3;
};

export const formattedDataTime = (dataTime: string): string => {
  return dataTime.substring(dataTime.indexOf(' '), dataTime.length - 3);
};

export const formattedMainDataTime = (mainDataTime: string): string => {
  return mainDataTime.substring(mainDataTime.indexOf(' '), mainDataTime.length - 6);
};

export const formattedData = (data: string): string => {
  const formattedDataValue: string[] = [];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNumber = data.slice(data.lastIndexOf('-') + 1, data.indexOf(' '));
  formattedDataValue.push(dayNumber + ' ');
  const monthNumber = Number(data.slice(data.indexOf('-') + 1, data.lastIndexOf('-')));
  for (let i = 0; i < month.length; i++) {
    if (i === monthNumber - 1) {
      formattedDataValue.push(month[i] + ', ');
    }
  }
  const yearNumber = data.slice(0, 4);
  formattedDataValue.push(yearNumber);
  const dataTime = data.slice(data.indexOf(' '), data.lastIndexOf(':'));
  formattedDataValue.push(dataTime);
  return formattedDataValue.join('');
};

export const formattedDataDay = (dataTime: string): string => {
  return formattedData(dataTime).slice(0, formattedData(dataTime).indexOf(','));
};

export const setDay = (dateString: string): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date(dateString);
  return days[day.getDay()];
};

export const toPercentUVIndex = (num: number): string => {
  return (100 * num) / 12 + '%';
};

export const humidityChange = (num: number): string => {
  const result = (405 * num) / 100;
  return String(result);
};

export const formattedSunsetSunriseData = (data: any): string => {
  data = data.toString();
  return data.slice(data.indexOf(':') - 2, data.lastIndexOf(':'));
};

export const toMinutes = (dataTime: string): number => {
  const hours = dataTime.slice(0, dataTime.indexOf(':'));
  const minutes = dataTime.slice(dataTime.indexOf(':') + 1, dataTime.length);
  return Number(hours) * 60 + Number(minutes);
};

export const toPercentSunriseSunset = (minutes: string): string => {
  return (100 * toMinutes(minutes)) / 1440 + '%';
};

// export const toPercentSunriseSunset = (
//   minutes: string,
//   sunset: string,
//   sunrise: string
// ): string => {
//   return (100 * toMinutes(minutes)) / toMinutes(sunset) +  + '%';
// };
