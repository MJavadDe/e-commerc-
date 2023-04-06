import Layout from '@/Components/layout';
import Link from 'next/link';
import React from 'react';

const Courses = () => {
    return (
        <Layout title="Courses">
            <h1>courses are here</h1>
            <Link href="/">
                <div>back to home</div>
            </Link>
            
        </Layout>
    );
};

export default Courses;