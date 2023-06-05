'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';

const Register = () => {
  return (
    <>
      <PageHeader image='/images/page-banner.jpg' heading='Register' />
      <div className='register'>
        <div className='register__container'>
          <div className='register__name'>
            <Input
              onChange={() => {}}
              type='text'
              placeholder='First Name'
              icon={<FaRegUser />}
            />
            <Input
              onChange={() => {}}
              type='text'
              placeholder='Last Name'
              icon={<FaRegUser />}
            />
          </div>
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
          <Input
            onChange={() => {}}
            type='password'
            placeholder='Confirm Password'
            icon={<MdLockOutline />}
          />
          <Button onClick={() => {}} label='submit' large fullWidth />
          <div className='register__notice'>
            <span>Already have an account?</span>&nbsp;
            <Link href='login'>Login</Link>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
