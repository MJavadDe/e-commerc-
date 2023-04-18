import Button from '@/Commons/buttons/Button'
import Input from '@/Commons/inputs/Input'
import React from 'react'
import { useRouter } from 'next/router'
const LoginForm = () => {
  const router = useRouter()
  const handleForgetpass = ()=>{
    router.push('/auth/forgetpass')
  }
  return (
    <div className='flex flex-col items-center w-[90%] lg:w-1/3 lg:mr-20 gap-7 z-10 p-5'>
      <h3 className='text-blue'>وارد حساب کاربری خود شوید</h3>
      <Input className="w-full rounded-xl" placeholder="ایمیل"/>
      <Input className="w-full rounded-xl" placeholder="رمز عبور"/>
      <span onClick={handleForgetpass} className='self-end text-blue underline cursor-pointer'>رمز خود را فراموش کرده ام</span>
      <Button className="bg-secondary-light w-full text-blue h-[50px] rounded-xl flex items-center justify-center cursor-pointer">ورود</Button>
    </div>
  )
}

export default LoginForm
