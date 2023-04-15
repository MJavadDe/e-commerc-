import Image from 'next/image';
import React from 'react';

function TeacherCarusel(props) {
    return (
        <div className='w-full bg-secondary-very-light min-h-[300px] rounded-lg flex flex-col lg:flex-row-reverse'>
            <div className="lg:w-1/2 bg-[url('/images/teacher.png')]">

            </div>
            <div className='lg:w-1/2'>

            </div>
        </div>
    );
}

export default TeacherCarusel;