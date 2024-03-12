import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      <Button onClick={getUserLocation}>{t('testLocation.button')}</Button>
      {userLocation && (
        <LocationContainer>
          <TitleH2>{t('testLocation.title')}</TitleH2>
          <LocationLabel>{t('testLocation.latitude')}: {userLocation.latitude}</LocationLabel>
          <LocationLabel>{t('testLocation.longitude')}: {userLocation.longitude}</LocationLabel>
        </LocationContainer>
      )}
    </LocationContainer>
  );
}
