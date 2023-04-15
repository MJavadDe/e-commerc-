import Image from 'next/image';
import React from 'react';

function TeacherCarusel(props) {
    return (
        <div className='w-full bg-secondary-very-light min-h-[300px] rounded-lg flex flex-col justify-between lg:flex-row-reverse px-15 pb-7 pt-9 font-vazir'>
            <div className="lg:w-1/2 bg-[url('/images/teacher.png')] bg-contain bg-center bg-no-repeat">

            </div>
            <div className='lg:w-1/2 flex-col justify-center items-center text-center'>
            <h2 className="text-blue text-xl mb-4">مدرسین نمونه مجموعه آموزشی ما</h2>

            </div>
        </div>
    );
}

export default TeacherCarusel;