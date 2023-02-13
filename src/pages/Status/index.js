import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { Items } from '../../components/Items/index';
import { LocationContext } from '../../context/locationcontext';
import { FlatList } from 'react-native';

export function Status() {
  const { location } = useContext(LocationContext);
  const [loading, setLoading] = useState(true)

  return <Container>

    <FlatList
      data={location}
      renderItem={({ item }) => <Items Id={item?.id} Date={"2021"} Status="Pendente sincronizar"></Items>}
      keyExtractor={item => item.id}
    />
  </Container>;
}
