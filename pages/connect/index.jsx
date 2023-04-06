import Layout from '@/Components/layout';
import Link from 'next/link';
import React from 'react';

const ConnectWithUs = () => {
    return (
        <Layout title="Connect with use">
            <h1>this is connect with us</h1>
            <Link href="/">
                back to home     
            </Link>
        </Layout>
    );
};

export default ConnectWithUs;