import Image from 'next/image';
import React from 'react';

import Gift from './gift.svg';
import GraduationCap from './graduation-cap.svg';
import SupportSormeyi from './support sormeyi.svg';
import Teach from './teach.svg';


function ServicesCard(props) {
    // return (
    //     <div className='flex justify-center items-center'>
           
    //        <div className='m-4 flex flex-col justify-center items-center'>
    //         <Image src={GraduationCap} alt="" className='bg-primary-100 rounded-full p-2 w-[50%] ' />
    //         <p>دوره های رایگان</p>
    //        </div>

    //        <div className='m-4 flex flex-col justify-center items-center'>
    //         <Image src={Teach} alt="" className='bg-primary-100 rounded-full p-2 w-[50%] ' />
    //         <p>مدرسین مجرب</p>
    //        </div>

    //        <div className='m-4 flex flex-col justify-center items-center'>
    //         <Image src={Gift} alt="" className='bg-primary-100 rounded-full p-2 w-[50%] ' />
    //         <p>کدهای تخفیف</p>
    //        </div> 

    //        <div className='m-4 flex flex-col justify-center items-center'>
    //         <Image src={SupportSormeyi} alt="" className='bg-primary-100 rounded-full p-2 w-[50%] '/>
    //         <p>پشتیبانی 24/7</p>
    //        </div>
           
    //     </div>
    // );



    return (
        <div className='flex justify-center items-center'>
           
           <div className='m-4 flex flex-col justify-center items-center'>
            <div className='bg-primary-100 rounded-full p-1'>
            <Image src={GraduationCap} alt="" className=' p-2 ' width={50}  />
            </div>
            <p>دوره های رایگان</p>
           </div>

           <div className='m-4 flex flex-col justify-center items-center'>
            <div className='bg-primary-100 rounded-full p-1'>
            <Image src={Teach} alt="" className=' p-2 ' width={50}  />
            </div>
            <p>مدرسین مجرب</p>
           </div>

           <div className='m-4 flex flex-col justify-center items-center'>
            <div className='bg-primary-100 rounded-full p-1'>
            <Image src={Gift} alt="" className=' p-2 ' width={50}  />
            </div>
            <p>کدهای تخفیف</p>
           </div> 

           <div className='m-4 flex flex-col justify-center items-center'>
            <div className='bg-primary-100 rounded-full p-1'>
            <Image src={SupportSormeyi} alt="" className=' p-2 ' width={50} />
            </div>
            <p>پشتیبانی 24/7</p>
           </div>
           
        </div>
    );
}

export default ServicesCard;