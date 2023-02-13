import * as React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/Images/logoApp.png'

import {
    Container,
    NameLabel,
    StatusLabel,
    AreaDescription,
    styles
} from './styles';

export function HeaderAndStatus({ status }) {
    return (
        <Container>
            <Image
                style={styles.img}
                source={Logo}
            />
            <AreaDescription>
                <NameLabel>My GPS - Tracking</NameLabel>
                <StatusLabel style={{color: status == "Online" ? '#5FCD64' : 'red'}}>{status}</StatusLabel>
            </AreaDescription>
        </Container>
    );
}
