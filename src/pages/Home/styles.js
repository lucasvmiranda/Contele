import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
`;

export const Content = styled.View`
    padding: 0 20px;
    background-color: #f9f8ff;
`;

export const AreaConfig = styled.View`
    width: 100%;
    height: 100%;
`;

export const StatusToogleArea = styled.View`
    height: 100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

export const TitleStatusOptions = styled.Text`
    font-size: 20px;
    color: #5C605C;
`;

export const DescriptionStatusOptions = styled.Text`
    font-size: 14px;
    color: #5C605C;
`;

export const AreaDescription = styled.View`
    justify-content: center;
`;

export const AreaToogle = styled.View`
    width: 80px;
    align-items: center;
    justify-content: center;
`;

export const IntervalArea = styled.View`
    height: 130px;
    justify-content: space-between;
`;

export const IntervalAreaButton = styled.View`
    height: 80px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonInterval = styled.TouchableOpacity`
    width: 80px;
    height: 70px;
    border: 1px solid gray;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const TextButtonInterval = styled.Text`
    color: #BABABA;
    font-size: 20px;
`;

export const LineSeparator = styled.View`
    height: 1px;
    background-color: #BABABA;
`;