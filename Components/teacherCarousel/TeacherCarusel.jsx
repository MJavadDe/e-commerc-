import Image from 'next/image';
import React from 'react';
import Teachers from './Teachers';

function TeacherCarusel(props) {
    return (
        <div className='w-full bg-secondary-very-light min-h-[300px] rounded-lg flex flex-col items-center justify-between lg:flex-row-reverse px-5 md:px-15 pb-7 pt-9 font-vazir gap-8'>
            <div className="w-full min-h-[300px] lg:w-1/2 bg-[url('/images/teacher.svg')] bg-contain bg-center bg-no-repeat">

            </div>
            <div className='w-full lg:w-1/2 flex-col justify-center items-center text-center'>
                <Teachers/>
            </div>
        </div>
    );
}

export default TeacherCarusel;