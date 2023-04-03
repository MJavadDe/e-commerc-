import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Link href="/courses">
                <Button>
                courses  
                </Button> 
            </Link>
            <Link href="/blog">
                <Button>
                blog  
                </Button> 
            </Link>
            <Link href="/connect">
                <Button>
                connect us
                </Button> 
            </Link>
            <Link href="/aboutUs">
                <Button>
                about us  
                </Button> 
            </Link>
            <Link href="/shopcart">
                <Button>
                shop cart
                </Button>
            </Link>
            <Link href="/auth">
                <Button>
                login
                </Button>
            </Link>
            <Link href="/dashbord">
                <Button>
                    dashbord
                </Button>
            </Link>
        </div>
    );
};

export default Navbar;