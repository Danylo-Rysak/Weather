import { SearchPlace } from './SearchPlace/SearchPlace';
import { HeaderContainer } from './HeaderStyles';
import { WeatherPlace } from './WeatherPlace/WeatherPlace';

export const Header = () => {
  return (
    <HeaderContainer>
      <WeatherPlace />
      <SearchPlace />
    </HeaderContainer>
  );
};
