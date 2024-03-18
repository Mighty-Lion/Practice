import Layout from './components/Layout';
import { useRoutes } from '@/routes/routes';
import { AuthorizationProvider } from '@/providers/AuthorizationProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

export function App() {
  const routes = useRoutes();

  return (
    <AuthorizationProvider>
      <ThemeProvider>
        <Layout>{routes}</Layout>
      </ThemeProvider>
    </AuthorizationProvider>
  );
}
