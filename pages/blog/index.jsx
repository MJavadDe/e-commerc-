import Button from '@/Commons/buttons/Button';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>blog section is here</h1>
            <Link href='/'>
                back to home
            </Link>
            <Button className={'bg-slate-400 rounded-md px-3 py-1'} onClick={()=>{alert('ok')}}>
                test btn
            </Button>
        </div>
    );
};

export default Blog;