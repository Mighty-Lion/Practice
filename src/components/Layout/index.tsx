import { PropsWithChildren, Suspense, useMemo } from 'react';
import { Header } from './partials/Header';
import { ContentWrapper, LoadingWrapper, Wrapper } from './index.styles';
import { Footer } from './partials/Footer';
import { LoadingSpinner } from '@/components/LoadingSpiner';

export default function Layout({ children }: PropsWithChildren) {
  function Loading() {
    return useMemo(() => {
      return (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      );
    }, []);
  }
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loading />}>
        <ContentWrapper as="main">{children}</ContentWrapper>
      </Suspense>
      <Footer />
    </Wrapper>
  );
}
