import SignupForm from '@/Components/signupForm/signupForm'
import AuthLayout from '@/layouts/authLayout/authLayout'
import React, { useState } from 'react'
import {useRouter} from "next/router"

const Signup = ({animation}) => {
  const [active, setActive] = useState(false);

  return (
    <AuthLayout  image="/images/signup.png" active={active} setActive={setActive} >
        <SignupForm/>
    </AuthLayout>
  )
}
export async function getServerSideProps(context) {
  return {
    props: {animation:false}, // will be passed to the page component as props
  }
}

export default Signup
