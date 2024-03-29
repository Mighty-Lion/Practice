import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import { Home } from '@/pages/Home';
import { Admin } from '@/pages/Admin';
import { Logout } from '@/pages/Logout';
import { PrivateRoute } from '@/components/PrivateRoute';

export function useRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}
