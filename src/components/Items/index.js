import React, { useState, useEffect } from 'react';
import {
    Container,
    PackageId,
    StatusLabel,
    AreaDescription,
    DateLabel,
} from './styles';

import { format } from 'date-fns'

export function Items({ Id, Status, Date }) {

    return (
        <Container>
            <AreaDescription>
                <PackageId numberOfLines={1}>Pacote ID: {Id}</PackageId>
                <StatusLabel>{Status}</StatusLabel>
            </AreaDescription>
            <DateLabel>{Date}</DateLabel>
        </Container>
    );
}
