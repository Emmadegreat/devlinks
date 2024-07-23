"use client";
import {toast} from 'react-toastify'
import Link from 'next/link';
import { auth, db } from '../../firebase'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            signInWithEmailAndPassword(auth, email, password);
            setShowError(false);
            setErrorMessage("");
            toast.success('successfully signed in')
            window.location.href="/home" //modify as expected
        } catch (error) {
            setShowError(true);
            //setErrorMessag('error');

        }
    }



  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="flex flex-col m-auto  gap-10">
        <div className="flex justify-center">
          <img src="/images/logo.png" alt="devlinks" width={185.5} height={40} />
        </div>
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="text-[32px] font-bold text-[#333333]">Login</h2>
            <p className="text-sm text-center text-[#737373]">
              Add your details below to get back into the app
            </p>
          </div>
          <form className="flex flex-col mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <label htmlFor="email-address" className="text-[12px]">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" block bg-transparent w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm focus:shadow-2xl"
                  placeholder="e.g. alex@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute inset-y-0  top-6 flex items-center pl-3">
                  <img src="/images/mail.png" alt="" />
                </span>
              </div>
              <div className="relative">
                <label htmlFor="password" className="text-[12px]">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 left-0 top-6 flex items-center pl-3">
                  <img src="/images/keylock.png" alt="" />
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-600">
            <p>
              Don’t have an account? <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
