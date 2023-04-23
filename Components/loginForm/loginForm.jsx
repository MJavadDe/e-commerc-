import Button from '@/Commons/buttons/Button'
import Input from '@/Commons/inputs/Input'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
const LoginForm = ({signInFunction,ServerResponse}) => {
      const emailInput = useRef(null)
      const passwordInput = useRef(null)
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()
      
      const router = useRouter()
      const handleForgetpass = ()=>{
        router.push('/auth/forgetpass')
      }
      const signInTrigger = (e) =>{
        setEmail(e.target.previousElementSibling.previousElementSibling.previousElementSibling.value)
        setPassword(e.target.previousElementSibling.previousElementSibling.value)
        signInFunction(Email,Password)
        console.log(e.target.previousElementSibling.previousElementSibling.value);
      }
      useEffect(() => {
      }, [])


      return (
        <div className='flex flex-col items-center w-[90%] lg:w-1/3 lg:mr-20 gap-7 z-10 p-5'>
          <h3 className='text-blue'>وارد حساب کاربری خود شوید</h3>
          <span>{ServerResponse}</span>
          <Input ref={emailInput} className="w-full rounded-xl" placeholder="ایمیل"/>
          <Input ref={passwordInput} className="w-full rounded-xl" placeholder="رمز عبور"/>
          <span onClick={handleForgetpass} className='self-end text-blue underline cursor-pointer'>رمز خود را فراموش کرده ام</span>
          <Button onClick={signInTrigger} className="bg-secondary-light w-full text-blue h-[50px] rounded-xl flex items-center justify-center cursor-pointer">ورود</Button>
        </div>
      )
}

export default LoginForm
