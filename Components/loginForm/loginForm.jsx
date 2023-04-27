import Button from '@/Commons/buttons/Button'
import Input from '@/Commons/inputs/Input'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
const LoginForm = ({signInFunction,ServerResponse}) => {
      const emailInput = useRef(null)
      const passwordInput = useRef(null)
      // const [Email, setEmail] = useState()
      // const [Password, setPassword] = useState()
      
      const router = useRouter()
      const handleForgetpass = ()=>{
        router.push('/auth/forgetpass')
      }
      const signInTrigger = () =>{
        // setEmail((prev) => { e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = prev})
        // setPassword(e.target.previousElementSibling.previousElementSibling.value)
        const email = emailInput.current.value
        const pass = passwordInput.current.value
        signInFunction(email,pass)
      }
      useEffect(() => {
        document.addEventListener("keyup",(e) => {
          if (e.key === "Enter") {
            signInTrigger()
          }
        })
      }, [])


      return (
        <div className='flex flex-col items-center w-[90%] lg:w-1/3 lg:mr-20 gap-7 z-10 p-5'>
          <h3 className='text-blue'>وارد حساب کاربری خود شوید</h3>
          <span>{ServerResponse}</span>
          <input ref={emailInput} className="w-full rounded-xl font-vazir bg-transparent placeholder:text-primary shadow-md px-2 py-1 outline-none text-blue h-[50px]" placeholder="ایمیل"/>
          <input ref={passwordInput} className=" font-vazir  bg-transparent placeholder:text-primary shadow-md px-2 py-1 outline-none text-blue h-[50px] w-full rounded-xl" placeholder="رمز عبور"/>
          <span onClick={handleForgetpass} className='self-end text-blue underline cursor-pointer'>رمز خود را فراموش کرده ام</span>
          <Button onClick={signInTrigger} className="bg-secondary-light w-full text-blue h-[50px] rounded-xl flex items-center justify-center cursor-pointer">ورود</Button>
        </div>
      )
}

export default LoginForm
