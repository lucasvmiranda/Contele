import React, { createContext, useEffect, useState } from "react";
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import uuid from 'react-native-uuid';
import { api } from "../lib/api";

export const LocationContext = createContext([]);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState();
  const [time, setTime] = useState(10000);
  const getHours = new Date().getHours();
  const getMinutes = new Date().getMinutes();

  const saveLocale = async (dataLocation) => {
    await api.post(`/points/${dataLocation?.id}`, { dataLocation })
  }

  const setTimeOption = (valueSelect) => {
    setTime(valueSelect);
  }

  const setStatusOption = (statusSelect) => {
    setStatus(statusSelect);
  }


  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }


  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;

        const dataLocation = { latitude, longitude, date: getHours + ":" + getMinutes, id: uuid.v4(), status: status }
        setLocation((prev) => [...prev, dataLocation]);
        saveLocale(dataLocation)
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, fastestInterval: time, distanceFilter: 0, interval: time }
    );

    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, [time]);

  return (
    <LocationContext.Provider value={{ location, setTimeOption, setStatusOption }}>{children}</LocationContext.Provider>
  )
}


