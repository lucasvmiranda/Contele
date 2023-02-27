import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
        borderRadius: 999,
        resizeMode: 'contain',
    }
});
export const Container = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    background-color: #f9f8ff;
    padding: 0 0 0 20px;


    flex-direction: row;
`;

export const AreaDescription = styled.View`
    margin-left: 30px;
`;

export const NameLabel = styled.Text`
    font-size: 20px;
    color: black;
    font-weight: 500;
`;

export const StatusLabel = styled.Text`
    font-size: 14px;
    color: #5FCD64;
    font-style: italic;
`;
