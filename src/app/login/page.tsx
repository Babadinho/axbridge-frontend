'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import React from 'react';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';

const Login = () => {
  return (
    <>
      <PageHeader image='/images/page-banner.jpg' heading='Login' />
      <div className='login'>
        <div className='login__container'>
          <Input
            onChange={() => {}}
            type='email'
            placeholder='Email'
            icon={<MdAlternateEmail />}
          />
          <Input
            onChange={() => {}}
            type='password'
            placeholder='Password'
            icon={<MdLockOutline />}
          />
          <Button onClick={() => {}} label='submit' large fullWidth />
          <div className='login__notice'>
            <span>Don&apos;t have an account?</span>&nbsp;
            <Link href='register'>Register</Link>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
