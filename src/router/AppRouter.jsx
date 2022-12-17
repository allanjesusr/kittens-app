import { Fragment } from 'react';
// import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { KittenScreen, NavbarComponent } from '../components';
import { KittensApp } from '../KittensApp';
import { LayoutComponent } from '../Layout/LayoutComponent';

export const AppRouter = () => {

    return (
        <>
            <LayoutComponent>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<KittensApp />} />
                    <Route path="/kitten/:id" element={<KittenScreen />} />
                    {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                </Routes>
            </LayoutComponent>
        </>
    )
}
