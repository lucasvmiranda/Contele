import React, { useState, useContext } from 'react';
import { Switch } from 'react-native';
import { HeaderAndStatus } from '../../components/HeaderAndStatus/index';
import { LocationContext } from '../../context/locationcontext';
import {
    Container,
    Content,
    AreaConfig,
    StatusToogleArea,
    TitleStatusOptions,
    DescriptionStatusOptions,
    AreaDescription,
    AreaToogle,
    IntervalArea,
    ButtonInterval,
    IntervalAreaButton,
    TextButtonInterval,
    LineSeparator
} from './styles';

export function Home() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { setTimeOption, setStatusOption } = useContext(LocationContext);
    const [temp, setTemp] = useState(1000)

    const setTime = () => [
        setTimeOption(temp)
    ]

    const setStatus = () => [
        setStatusOption(isEnabled)
    ]

    return (
        <Container>

            <HeaderAndStatus status={isEnabled == true ? "Online" : "Offline"} ></HeaderAndStatus>
            <LineSeparator />
            <Content>
                <AreaConfig>
                    <StatusToogleArea>
                        <AreaToogle>
                            <Switch
                                trackColor={{ false: '#D4D3D3', true: '#D4D3D3' }}
                                thumbColor={isEnabled ? '#5FCD64' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </AreaToogle>
                        <AreaDescription>
                            <TitleStatusOptions>Status do serviço</TitleStatusOptions>
                            <DescriptionStatusOptions>Serviço ativo</DescriptionStatusOptions>
                        </AreaDescription>
                    </StatusToogleArea>

                    <IntervalArea>
                        <TitleStatusOptions>Intervalo de comunicação</TitleStatusOptions>
                        <IntervalAreaButton>

                            <ButtonInterval style={{ borderColor: temp === 10000 ? '#5FCD64' : 'gray' }} onPress={() => setTemp(10000)}>
                                <TextButtonInterval>10s</TextButtonInterval>
                            </ButtonInterval>

                            <ButtonInterval style={{ borderColor: temp === 5000 ? '#5FCD64' : 'gray' }} onPress={() => setTemp(5000)}>
                                <TextButtonInterval>5s</TextButtonInterval>
                            </ButtonInterval>

                            <ButtonInterval style={{ borderColor: temp === 3000 ? '#5FCD64' : 'gray' }} onPress={() => setTemp(3000)}>
                                <TextButtonInterval>3s</TextButtonInterval>
                            </ButtonInterval>

                            <ButtonInterval style={{ borderColor: temp === 1000 ? '#5FCD64' : 'gray' }} onPress={() => setTemp(1000)}>
                                <TextButtonInterval>1s</TextButtonInterval>
                            </ButtonInterval>

                        </IntervalAreaButton>
                    </IntervalArea>
                </AreaConfig>
            </Content>
        </Container >
    );
}
