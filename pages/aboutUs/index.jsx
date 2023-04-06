import Errore404 from '@/Components/Error404/Errore404';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1>this is about us</h1>
            <Link href="/">
                back to home     
            </Link>
            
        </div>
    );
};

export default AboutUs;