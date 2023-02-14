import React, { useContext } from 'react';
import { Container } from './styles';
import { Items } from '../../components/Items/index';
import { LocationContext } from '../../context/locationcontext';
import { FlatList } from 'react-native';

export function Status() {
  const { location } = useContext(LocationContext);

  return <Container>
    <FlatList
      data={location}
      renderItem={({ item }) => <Items Id={item?.id} Date={item?.date} Status={item?.status === true ? 'Sincronizado' : 'Pendente Sincronização'}></Items>}
      keyExtractor={item => item.id}
    />
  </Container>;
}
