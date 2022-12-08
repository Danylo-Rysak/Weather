import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { useAppDispatch } from '../../../utils/hooks/hooks';
import {
  setLatitude,
  setLongitude,
  setPlaceName,
} from '../../../services/store/slices/weatherSlice';
import { SearchImg, SearchPlaceContainer } from './SearchPlaceStyles';
import search from '@assets/svg/search.svg';

const apiKey = 'AIzaSyCF89WAav8Pav4OGSENK4WuxBksJGbVto8';

export const SearchPlace = () => {
  const dispatch = useAppDispatch();
  return (
    <SearchPlaceContainer>
      <SearchImg src={search} alt="search" />
      <ReactGoogleAutocomplete
        apiKey={apiKey}
        placeholder="Search the city"
        id="input"
        onPlaceSelected={(place) => {
          const { formatted_address, geometry } = place;
          dispatch(setPlaceName(formatted_address));
          dispatch(setLatitude(geometry?.location?.lat()));
          dispatch(setLongitude(geometry?.location?.lng()));
          console.log(place.html_attributions);
        }}
      />
    </SearchPlaceContainer>
  );
};
