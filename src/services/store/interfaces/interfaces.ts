interface IClouds {
  all: number;
}

interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
interface ISys {
  pod: string;
}

interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface IData {
  clouds: IClouds;
  dt: number;
  dt_txt: string;
  main: IMain;
  sys: ISys;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}

export interface IWeatherState {
  placeName: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  loading: boolean;
  hasErrors: boolean;
  countCurrentDayParts: number;
  days: IData[][];
  currentDay: number;
  currentData: string;
  mainTemp: number | string;
  mainIcon: string;
  sunset: string;
  sunrise: string;
  UIIndex: number;
}
