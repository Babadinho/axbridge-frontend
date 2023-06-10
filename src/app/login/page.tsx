'use client';

import { useCallback, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const handleChange = (name: string) => (e: { target: { value: string } }) => {
    setUser((user) => ({ ...user, [name]: e.target.value }));
  };

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      signIn('credentials', {
        redirect: true,
        email,
        password,
        callbackUrl,
      });

      toast.success('Logged in');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, callbackUrl]);

  return (
    <>
      <PageHeader image='/images/page-banner.jpg' heading='Login' />
      <div className='login'>
        <div className='login__container'>
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
