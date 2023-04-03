import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Auth = () => {
    return (
        <div>
            <h1>this is auth</h1>
            <Link href="/">
                back to home 
            </Link>
        </div>
    );
};

export default Auth;