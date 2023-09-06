// 1
import { useSignal, $ } from '@builder.io/qwik';

const useGeolocation = () => {
  // 2
  const location = useSignal<{
    latitude?: number;
    longitude?: number;
    error: string;
    text: string;
  }>({
    latitude: 0,
    longitude: 0,
    error: '',
    text: '',
  });

  // 3
  const success = $(
    (position: { coords: { latitude: number; longitude: number } }) => {
      location.value = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: '',
        text: `Position found in ${position.coords.latitude}, ${position.coords.longitude}`,
      };
    }
  );

  // 4
  const error = $(() => {
    location.value.error = 'Unable to retrieve your location';
  });

  // 5
  const geoFindMe = $(() => {
    // 6
    if (!navigator.geolocation) {
      location.value = {
        latitude: undefined,
        longitude: undefined,
        error: 'Geolocation is not supported by your browser',
        text: ``,
      };
      return;
    }
    // 7
    location.value = {
      latitude: undefined,
      longitude: undefined,
      error: '',
      text: `Locating...`,
    };
    navigator.geolocation.getCurrentPosition(success, error);
  });

  return {
    geoFindMe,
    location,
  };
};

export { useGeolocation };
