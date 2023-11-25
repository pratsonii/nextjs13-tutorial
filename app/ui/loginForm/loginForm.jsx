"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
import GoogleButton from 'react-google-button'

const LoginForm = () => {

    const callbackUrl = '/dashboard'
    return (
        <GoogleButton onClick={() => signIn("google", { callbackUrl })} />
    )
}

export default LoginForm