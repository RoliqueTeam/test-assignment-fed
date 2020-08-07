import React from 'react';

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { mapContainerStyle, mapStyles } from './utils';

type Props = {
  restaurantLocation: {
    lat: number;
    lng: number;
  };
};

const RestaurantMap: React.FC<Props> = ({ restaurantLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBBR2GcF-OR0YSh9Yoqvn3ZGicnkLNVFsY',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={restaurantLocation}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        styles: mapStyles,
      }}
      zoom={15}
    >
      <Marker position={restaurantLocation} />
    </GoogleMap>
  ) : (
    <h2>Map loading...</h2>
  );
};
export default RestaurantMap;
