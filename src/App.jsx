import React from 'react';
import { NextUIProvider } from '@nextui-org/react'
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { KittensApp } from './KittensApp';
import { darkTheme, lightTheme } from './theme';
import { AppRouter } from './router/AppRouter';

export const App = () => {

    const { themeDark } = useSelector(state => state.kitten);

    return (
        <NextUIProvider theme={themeDark ? darkTheme : lightTheme}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </NextUIProvider>
    )
}
