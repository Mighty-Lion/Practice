import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
import Layout from './components/Layout';
import { useAuthorization } from '@/hooks/useAuthorization';

export function App() {
  const { isAuthorized } = useAuthorization();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={isAuthorized ? <NotFound /> : <Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
