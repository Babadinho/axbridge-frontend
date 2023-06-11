import { redirect } from 'next/navigation';
import useCurrentUser from '@/hooks/useCurrentUser';

const PrivateRoute = (WrappedComponent: React.ComponentType<any>) => {
  const Auth = (props: any) => {
    const { data: currentUser } = useCurrentUser();

    if (currentUser) {
      return redirect('/');
    }

    return <WrappedComponent {...props} />;
  };
  return Auth;
};

export default PrivateRoute;
