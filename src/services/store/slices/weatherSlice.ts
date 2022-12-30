import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import { IData, IWeatherState } from '../interfaces/interfaces';
import {
  countDayParts,
  formattedData,
  formattedMainDataTime,
  formattedSunsetSunriseData,
  isPositiveInfoValue,
  setWeatherIcon,
} from '../../../utils/helpers/handyFunctions';

const initialState: IWeatherState = {
  placeName: '',
  latitude: 0,
  longitude: 0,
  loading: false,
  hasErrors: false,
  countCurrentDayParts: 0,
  days: [[], [], [], [], [], []],
  currentDay: 0,
  currentData: '',
  mainTemp: 0,
  mainIcon: '',
  sunset: '',
  sunrise: '',
  UIIndex: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setPlaceName: (state, action: PayloadAction<string | undefined>) => {
      state.placeName = action.payload;
    },
    setLatitude: (state, action: PayloadAction<number | undefined>) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action: PayloadAction<number | undefined>) => {
      state.longitude = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    setDaysSuccess: (state, action: PayloadAction<IData[]>) => {
      const mainDataTime: string = formattedMainDataTime(action.payload[0].dt_txt);
      const countCurrentDayParts = countDayParts(mainDataTime);
      action.payload.map((dayPart, i) => {
        if (i < countCurrentDayParts) {
          state.days[0].push(dayPart);
        } else if (i >= countCurrentDayParts && i < countCurrentDayParts + 8) {
          state.days[1].push(dayPart);
        } else if (i >= countCurrentDayParts + 8 && i < countCurrentDayParts + 16) {
          state.days[2].push(dayPart);
        } else if (i >= countCurrentDayParts + 16 && i < countCurrentDayParts + 24) {
          state.days[3].push(dayPart);
        } else if (i >= countCurrentDayParts + 24 && i < countCurrentDayParts + 32) {
          state.days[4].push(dayPart);
        } else if (i >= countCurrentDayParts + 32 && i < action.payload.length) {
          state.days[5].push(dayPart);
        }
      });
      state.loading = false;
      state.hasErrors = false;
    },
    setDaysFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    resetData: (state) => {
      state.days = state.days.map((day) => day.splice(day.length));
    },
    setCurrentDay: (state, action: PayloadAction<number>) => {
      state.currentDay = action.payload;
    },
    setCurrentData: (state) => {
      const dataTime = formattedData(state.days[state.currentDay][0].dt_txt);
      state.currentDay === 0
        ? (state.currentData = dataTime)
        : (state.currentData = dataTime.slice(0, dataTime.lastIndexOf(' ')));
    },
    setMainTemp: (state) => {
      state.mainTemp = isPositiveInfoValue(
        Math.round(state.days[state.currentDay][0].main.temp)
      );
    },
    setMainIcon: (state) => {
      state.mainIcon = setWeatherIcon(state.days[state.currentDay][0].weather[0].icon);
    },
    setSunset: (state) => {
      state.sunset = formattedSunsetSunriseData(
        getSunset(Number(state.longitude), Number(state.latitude))
      );
    },
    setSunrise: (state) => {
      state.sunrise = formattedSunsetSunriseData(
        getSunrise(Number(state.longitude), Number(state.latitude))
      );
    },
    setUIIndex: (state) => {
      state.UIIndex = Math.floor(Math.random() * 9 + 0.1);
    },
  },
});

export const {
  setPlaceName,
  setLatitude,
  setLongitude,
  startLoading,
  setDaysSuccess,
  setDaysFailure,
  setCurrentDay,
  setCurrentData,
  setMainTemp,
  setMainIcon,
  resetData,
  setSunset,
  setSunrise,
  setUIIndex,
} = weatherSlice.actions;
