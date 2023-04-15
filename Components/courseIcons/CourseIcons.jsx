import React from 'react';
import VueJsIcon from './VueJsIcon';
import BootstrapIcon from './BootstrapIcon';
import NodeJsIcon from './NodeJsIcon';
import ReactIcon from './ReactIcon';
import PythonIcon from './PythonIcon';
import Angular from './Angular';
import LaravelIcon from './LaravelIcon';
import CoreNet from './Core.Net';
import MaterialUi from './MaterialUi';

const CourseIcons = () => {
    return (
        <div className='flex m-auto w-full bg-[#F2FCF8] p-3 rounded-md justify-around items-center'>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <VueJsIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <BootstrapIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <NodeJsIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <ReactIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <PythonIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <Angular/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <LaravelIcon/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <CoreNet/>
            </div>
            <div className='bg-white p-2 rounded-md shadow-lg'>
                <MaterialUi/>
            </div>
        </div>
    );
};

export default CourseIcons;