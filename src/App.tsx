import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
import Layout from './components/Layout';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
