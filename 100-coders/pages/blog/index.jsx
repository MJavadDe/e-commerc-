import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>blog section is here</h1>
            <Link href='/'>
                back to home
            </Link>
        </div>
    );
};

export default Blog;