import { AppDispatch, RootState } from '../store';
import { weatherAPI } from '../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  resetData,
  setDaysFailure,
  setDaysSuccess,
  startLoading,
} from '../slices/weatherSlice';

export const requestData = createAsyncThunk<
  any,
  undefined,
  { rejectValue: string; dispatch: AppDispatch; state: RootState }
>('weather', async (_, { getState, dispatch }) => {
  try {
    dispatch(startLoading());
    dispatch(resetData());
    const {
      weatherData: { latitude, longitude },
    } = getState();
    const { data } = await weatherAPI.getWeatherInfo(latitude, longitude);
    dispatch(setDaysSuccess(data.list));
  } catch (error) {
    dispatch(setDaysFailure());
  }
});
