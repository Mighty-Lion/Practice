import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthorization } from '@/hooks/useAuthorization';

export function PrivateRoute() {
  const { isAuthorized } = useAuthorization();
  const location = useLocation();

  return isAuthorized === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
