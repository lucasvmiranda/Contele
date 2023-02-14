import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    header: {
        width: '100%'
    }
});

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #2d43aa;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
`;

export const LabelStyle = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: 500;
`;
