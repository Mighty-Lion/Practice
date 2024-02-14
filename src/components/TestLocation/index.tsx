import { useState } from 'react';
import {
  LocationContainer,
  LocationLabel,
} from '@/components/TestLocation/index.styles';
import { Button } from '@/components/Button/index.styles';
import { TitleH2 } from '@/components/TitleH2/index.styles';

interface ILocationProps {
  latitude: number;
  longitude: number;
}
export function TestLocation() {
  const [userLocation, setUserLocation] = useState<ILocationProps | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },

        (error) => {
          console.error('Error get user location: ', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  };

  return (
    <LocationContainer>
      <Button onClick={getUserLocation}>Get User Location</Button>
      {userLocation && (
        <LocationContainer>
          <TitleH2>User Location</TitleH2>
          <LocationLabel>Latitude: {userLocation.latitude}</LocationLabel>
          <LocationLabel>Longitude: {userLocation.longitude}</LocationLabel>
        </LocationContainer>
      )}
    </LocationContainer>
  );
}
