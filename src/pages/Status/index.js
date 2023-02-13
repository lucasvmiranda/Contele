import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { Items } from '../../components/Items/index';
import { LocationContext } from '../../context/locationcontext';
import { ActivityIndicator } from 'react-native';

export function Status() {
  const { location } = useContext(LocationContext);
  // const [loading, setLoading] = useState(true)
  // location != [] || undefined ? setLoading(false) : setLoading(true)

  return <Container>

    {/* {loading ? <ActivityIndicator size="large" color="#21386e" /> : <>
      {loading ? <></> :
        location?.map((item) => { */}
          <Items Id="XXXX" Date="12:21" Status="Pendente sincronizar"></Items>
        {/* })
      }
    </>} */}
  </Container>;
}
