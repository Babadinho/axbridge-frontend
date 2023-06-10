'use client';

import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import Input from '@/components/Input';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';

const Register = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const { first_name, last_name, email, password } = user;

  const handleChange = useCallback(
    (name: string) => (e: { target: { value: string } }) => {
      setUser((user) => ({ ...user, [name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (!first_name || !last_name || !email || !password) {
      return toast.error('All fields are required!');
    }
    try {
      setIsLoading(true);

      await axios.post('/api/register', {
        first_name,
        last_name,
        email,
        password,
      });

      setIsLoading(false);

      toast.success('Account created!');
    } catch (error) {
      if (error) {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [first_name, last_name, email, password]);

  return (
    <>
      <PageHeader image='/images/page-banner.jpg' heading='Register' />
      <div className='register'>
        <div className='register__container'>
          <div className='register__name'>
            <Input
              onChange={handleChange('first_name')}
              type='text'
              placeholder='First Name'
              icon={<FaRegUser />}
              value={first_name}
              disabled={isLoading}
            />
            <Input
              onChange={handleChange('last_name')}
              type='text'
              placeholder='Last Name'
              icon={<FaRegUser />}
              value={last_name}
              disabled={isLoading}
            />
          </div>
          <Input
            onChange={handleChange('email')}
            type='email'
            placeholder='Email'
            icon={<MdAlternateEmail />}
            value={email}
            disabled={isLoading}
          />
          <Input
            onChange={handleChange('password')}
            type='password'
            placeholder='Password'
            icon={<MdLockOutline />}
            value={password}
            disabled={isLoading}
          />
          <Button
            onClick={handleSubmit}
            label={
              isLoading ? <ClipLoader color='white' size={30} /> : 'submit'
            }
            large
            fullWidth
            disabled={isLoading}
          />
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
