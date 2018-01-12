import React from 'react';
//npm install --save react-google-maps@4.7.1
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default function (props) {
  return (
    <GoogleMapLoader 
      containerElement={ <div style={{height:"100%"}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  );
}