import React from 'react';
import Input from './../../Commons/inputs/Input'
import Button from '@/Commons/buttons/Button';
import PriceComponent from './priceComponent';
const PayInfo = () => {
    return (
        <div className='flex flex-col shadow-2xl w-fit rounded-2xl w-2/5 text-xs md:text-base lg:px-5 font-vazir'>
            <h1 className='lg:py-4 p-3 md:text-lg font-vazir'>اطلاعات پرداخت</h1>
            <div className="VoucherContainer border-y-2 border-dashed outline-none w-full p-1 relative md:p-4 lg:p-5 flex items-center justify-center">
                <div className='flex border-2 rounded-2xl p-1'>
                    <Input className={"rounded-xl lg:p-1"} placeholder={"کد تخفیف خود را وارد کنید"}/>
                    <Button className={"border-2 lg:p-1 rounded-xl"}>
                        اعمال تخفیف
                    </Button>
                </div>
            </div>
                <div className="detailedPrice lg:p-5 flex flex-col justify-between lg:gap-2 border-b-2 border-dashed">
                    <PriceComponent/>
                    <PriceComponent title='تخفیف' price={60000}/>
                    <PriceComponent title='مجموع کل' price={300000}/>
                </div>
                <div className="priceToPay p-">
                    <PriceComponent title='مبلغ قابل پرداخت 'price={300000}/>
                </div>
        </div>
    );
};

export default PayInfo;