import React from 'react';
import { Loading } from '@nextui-org/react';

export const LoadingComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Loading size="lg">Loading Kittens...</Loading>
        </div>
    )
}
