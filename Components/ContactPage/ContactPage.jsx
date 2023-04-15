import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Input from '@/Commons/inputs/Input';
import Button from '@/Commons/buttons/Button';

function ContactPage(props) {
    return (
        <div className="bg-primary-very-light rounded-xl bg-circle " >
           <div className='contactWraper px-48 py-14 flex gap-44 relative z-10 '>
           <div>
                <div className='border flex  items-center py-12'>
                    <div className='px-8'>
                    <CallIcon className='text-primary text-3xl'/>
                    </div>
                    <div>
                        <h6 className='text-secondary font-bold py-1'>تماس بگیرید</h6>
                        <p className='text-gray'>091012331212</p>
                    </div>
                </div>

                <div className='border flex items-center py-12'>
                    <div className='px-8'>
                    <MessageIcon className='text-primary text-3xl' />
                    </div>
                    <div>
                        <h6 className='text-secondary font-bold py-1'>مکاتبه ایمیلی</h6>
                        <p className='text-gray'>از طریق ایمیل</p>
                        <p className='text-gray'>hadis.hds80@gmail.com</p>
                        
                    </div>
                </div>

                <div className='border flex items-center py-12'>
                    <div className='px-8'>
                    <QueryBuilderIcon className='text-primary text-3xl' />
                    </div>
                    <div>
                        <h6 className='text-secondary font-bold py-1'>ساعت کاری</h6>
                        <p className='text-gray'>شنبه تا سه شنبه 18 تا 20</p>
                        <p className='text-gray'>پنجشنبه ها 8 تا 12</p>
                    </div>
                </div>

                <div className='border flex items-center py-12'>
                    <div className='px-8'>
                <AddLocationAltIcon className='text-primary text-3xl'/>
                    </div>
                    <div>
                        <h6 className='text-secondary font-bold py-1'>نشانی</h6>
                        <p className='text-gray'>شیراز خیابان فروردین</p>
                    </div>
                </div>


            </div>


            <div>
                <h2>تماس با ما</h2>
                <Input placeholder = 'نام و نام خانوادگی'></Input>
                <Input placeholder = 'ایمیل'></Input>
                <Input placeholder = 'شماره موبایل'></Input>
                <textarea placeholder='متن  پیام' className='resize-none'></textarea>
                <Button> ارسال پیام</Button>
            </div>  
           </div>
        </div>
    );
}

export default ContactPage;