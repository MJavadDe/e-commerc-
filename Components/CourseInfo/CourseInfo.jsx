import React from 'react';
import PersonIcon from '@mui/icons-material/Person' ;
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PriceFormat from '@/utilitie/priceFormat';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LayersIcon from '@mui/icons-material/Layers';
import TranslateIcon from '@mui/icons-material/Translate';
import Button from '@/Commons/buttons/Button';

const CourseInfo = ({price = "25000",teacher = "حسامی",quantity = 6 ,length = "7:28:00",level = "متوسط",language = "فارسی"}) => {
    return (
        <div className='lg:w-3/12 w-4/12 rounded-xl flex flex-col p-5 shadow-2xl font-vazir' >
            <div className=' text-xl border-b-2 border-gray-200 p-5 flex '> <span className='sm:block hidden'>قیمت این دوره  &nbsp;  :  </span> &nbsp; <span className='text-[#46A194]'><PriceFormat price={price}/></span></div>
            <div className="courseInfoBody flex flex-col gap-3 p-5">
                <div className="InfoWrapper flex justify-start gap-3 ">
                    <span><PersonIcon color='disabled'/> </span>
                    <span className='text-gray-500'>مدرس دوره &nbsp; : <span className='text-black'>{teacher}</span> </span>
                </div>
                <div className="InfoWrapper flex justify-start gap-3 mt-4">
                    <span><PlayCircleOutlineIcon color='disabled'/> </span>
                    <span className='text-gray-500'> تعداد ویدیوها &nbsp; : <span className='text-black'>{quantity} ویدئو</span> </span>
                </div>
                <div className="InfoWrapper flex justify-start gap-3 mt-4">
                    <span><AccessAlarmIcon color='disabled'/> </span>
                    <span className='text-gray-500'> مدت زمان دوره &nbsp; : <span className='text-[#2EB5DD]'>{length}</span> </span>
                </div>
                <div className="InfoWrapper flex justify-start gap-3 mt-4">
                    <span><LayersIcon color='disabled'/> </span>
                    <span className='text-gray-500'> سطح دوره &nbsp; : <span className='text-black'>{level}</span> </span>
                </div>
                <div className="InfoWrapper flex justify-start gap-3 mt-4">
                    <span><TranslateIcon color='disabled'/> </span>
                    <span className='text-gray-500'> زبان دوره &nbsp; : <span className='text-black'>{language}</span> </span>
                </div>
            </div>
            <Button className={"bg-[#46A194] text-center w-11/12 p-3 rounded-lg m-auto mb-2 mt-4"}>ثبت نام در این دوره</Button>
        </div>
    );
};

export default CourseInfo;