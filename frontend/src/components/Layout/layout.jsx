import React from 'react';
import { Header } from '../Header/header.jsx';
import { Footer } from '../Footer/footer.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};