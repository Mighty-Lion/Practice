import Layout from './components/Layout';
import { useRoutes } from '@/routes/routes';
import { AuthorizationProvider } from '@/providers/AuthorizationProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { useModalController } from '@/hooks/useModalController';
import { runParallelQueries } from '@/functions/runParallelQueries';
import { getCalculatedResult } from '@/functions/getCalculatedResult';
import { fetchProductData } from '@/api/productData';

export function App() {
  const { isOpen, open, close, setIsOpen } = useModalController();
  const routes = useRoutes({ open });
  runParallelQueries();
  getCalculatedResult(3, 5);

  fetchProductData(import.meta.env.VITE_API);

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
