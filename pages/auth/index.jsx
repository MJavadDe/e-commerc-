import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/Components/layout';

const Auth = () => {
    return (
        <>
            <h1>this is auth</h1>
            <Link href="/">
                back to home 
            </Link>
        </>
    );
};

export default Auth;