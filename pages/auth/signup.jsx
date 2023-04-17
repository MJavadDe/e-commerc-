import SignupForm from '@/Components/signupForm/signupForm'
import AuthLayout from '@/layouts/authLayout/authLayout'
import React from 'react'
import {useRouter} from "next/router"

const Signup = ({animation}) => {
  return (
    <AuthLayout  image="/images/signup.png">
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
