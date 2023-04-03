import { useRouter } from 'next/router';
import React from 'react';

const SingleCourse = () => {
    return (
        <div>
            course number : {useRouter().query.course}
        </div>
    );
};

export default SingleCourse;