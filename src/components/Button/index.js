import * as React from 'react';
import { Container, LabelStyle } from './styles';

export function Button({ label }) {
    return (
        <Container>
            <LabelStyle>{label}</LabelStyle>
        </Container>
    );
}
