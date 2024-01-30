import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
import Layout from './components/Layout';
import { AuthorizationProvider } from '@/providers/AuthorizationProvider';

export function App() {
  return (
    <AuthorizationProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthorizationProvider>
  );
}
