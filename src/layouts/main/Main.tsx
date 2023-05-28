import React from 'react';
import NavBar from '../../components/layouts/navbar/NavBar';

import { AuthGuard } from '../authGuard/AuthGuard';

import "./style.css"

export const Main = ({ auth = false, children }: { auth?: boolean, children: React.ReactNode }) => {
    if (auth) {
        return (
            <AuthGuard>
                <NavBar />
                <div className="main">
                    {children}
                </div>
            </AuthGuard>
        );
    }

    return (
        <>
            <NavBar />
            <div className="main">
                {children}
            </div>
        </>
    );
}

