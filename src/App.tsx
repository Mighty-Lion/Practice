import Layout from './components/Layout';
import { useRoutes } from '@/routes/routes';
import { AuthorizationProvider } from '@/providers/AuthorizationProvider';

export function App() {
  const routes = useRoutes();

  return (
    <AuthorizationProvider>
      <Layout>{routes}</Layout>
    </AuthorizationProvider>
  );
}
