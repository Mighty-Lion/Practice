import Layout from './components/Layout';
import { useRoutes } from '@/routes/routes';
import { AuthorizationProvider } from '@/providers/AuthorizationProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { useModalController } from '@/hooks/useModalController';

export function App() {
  const { isOpen, open, close, setIsOpen } = useModalController();
  const routes = useRoutes({ open });

  return (
    <AuthorizationProvider>
      <ThemeProvider>
        <Layout isOpen={isOpen} setIsOpen={setIsOpen} close={close}>
          {routes}
        </Layout>
      </ThemeProvider>
    </AuthorizationProvider>
  );
}
