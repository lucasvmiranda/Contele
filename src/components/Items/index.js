import * as React from 'react';
import {
    Container,
    PackageId,
    StatusLabel,
    AreaDescription,
    DateLabel,

} from './styles';

export function Items({ Id, Status, Date }) {
    return (
        <Container>
            <AreaDescription>
                <PackageId>Pacote ID: {Id}</PackageId>
                <StatusLabel>{Status}</StatusLabel>
            </AreaDescription>
            <DateLabel>{Date}</DateLabel>
        </Container>
    );
}
