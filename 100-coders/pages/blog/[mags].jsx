import { useRouter } from 'next/router';
import React from 'react';

const SingleMag = () => {

    const router =   useRouter()


    return (
        <div>
            here will be mag number: {router.query.mags}
        </div>
    );
};

export default SingleMag;