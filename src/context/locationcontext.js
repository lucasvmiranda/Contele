import React, { createContext, useEffect, useState } from "react";
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import uuid from 'react-native-uuid';
import api from "../lib/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocationContext = createContext([]);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState(true);
  const [time, setTime] = useState(10000);
  const getHours = new Date().getHours();
  const getMinutes = new Date().getMinutes();

  const SaveOnline = async (SaveAPI) => {
    try {
      await api.post(`/points/${SaveAPI?.id}`, { SaveAPI })
    } catch (err) {
      console.error(err);
    }
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

  const saveStorage = async (dataOff) => {
    const dataOffs = await AsyncStorage.getItem('contele-locality');
    const convertInJson = dataOffs ? JSON.parse(dataOffs) : []
    const storage = JSON.stringify([...convertInJson, dataOff]);
    await AsyncStorage.setItem('contele-locality', storage);
  }

  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;

        const SaveAPI = { id: uuid.v4(), latitude: latitude, longitude: longitude, speed: time, time: new Date(), status: status, date: getHours + ":" + getMinutes }
        console.warn("status?", status)
        if (status) {
          SaveOnline(SaveAPI)
        } else {
          saveStorage(SaveAPI)
        }

        setLocation((prev) => [...prev, SaveAPI]);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, fastestInterval: time, distanceFilter: 0, interval: time }
    );

    saveStorage()


    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, [time, status]);

  const synchronizeData = async () => {
    const dataOffs = await AsyncStorage.getItem('contele-locality');
    const convertInJson = dataOffs ? JSON.parse(dataOffs) : []
    if (convertInJson.length > 0) {
      convertInJson.forEach((item) => {
        SaveOnline({ ...item, status: true });
      })
    }
    await AsyncStorage.setItem('contele-locality', JSON.stringify([]));
  }

  useEffect(() => {
    if (status) {
      synchronizeData()
    }
  }, [status])

  return (
    <LocationContext.Provider value={{ location, setTimeOption, setStatusOption, status }}>{children}</LocationContext.Provider>
  )
}


