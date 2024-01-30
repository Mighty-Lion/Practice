import Layout from './components/Layout';
import { useRoutes } from '@/routes/routes';

export function App() {
  const routes = useRoutes();

  return <Layout>{routes}</Layout>;
}
