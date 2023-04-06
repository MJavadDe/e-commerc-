import Layout from '@/Components/layout';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const Dashbord = () => {
    return (
        <Layout title="Dashboard">
            here will be dashbord
            <Link href="dashbord/MyCourses">
                <Button>
                    my courses
                </Button>
            </Link>
            <Link href="dashbord/CoursesList">
                <Button>
                    Courses List
                </Button>
            </Link>
            <Link href="dashbord/ProfileEdit">
                <Button>
                    Profile edit
                </Button>     
            </Link>
            <Link href="dashbord/FavoriteCourses">
                <Button>
                    favorite courses
                </Button>   
            </Link>
        </Layout>
    );
};

export default Dashbord;