import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='bg-[#fafafa]'>
            <h1>chikodi write your code here Welcome to DevLinks</h1>
            <h4>Login</h4>
            <p>Don&#39;t have an account?<Link href="/register">Create Account</Link></p>
        </div>
    )
}

export default Login