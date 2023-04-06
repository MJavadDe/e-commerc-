import Errore404 from '@/Components/Error404/Errore404';
import React from 'react';
import Layout from '../Components/layout'

function Error(props) {
    return (
        <Layout title="Error 404">
            <Errore404 />
        </Layout>
        );
}

export default Error;