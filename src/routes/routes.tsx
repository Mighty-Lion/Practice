import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { PrivateRoute } from '@/components/PrivateRoute';

const Homepage = lazy(() => import('../pages/Home/index'));
const LoginPage = lazy(() => import('../pages/Login/index'));
const NotFoundPage = lazy(() => import('../pages/NotFound/index'));
const SignupPage = lazy(() => import('../pages/Signup/index'));
const AdminPage = lazy(() => import('../pages/Admin/index'));
const LogoutPage = lazy(() => import('../pages/Logout/index'));
export function useRoutes() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Route>
    </Routes>
  );
}
