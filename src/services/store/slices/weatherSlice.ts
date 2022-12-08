import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeatherState } from '../interfaces/interfaces';

const initialState: IWeatherState = {
  placeName: '',
  latitude: 0,
  longitude: 0,
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
  },
});

export const { setPlaceName, setLatitude, setLongitude } = weatherSlice.actions;
