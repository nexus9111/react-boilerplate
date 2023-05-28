import React, { useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { authToken } from '../../helpers/store/token';
import { useNavigate } from 'react-router';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    const token = useRecoilValue(authToken);

    useEffect(() => {
        if (token === "") {
            navigate("/");
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
}