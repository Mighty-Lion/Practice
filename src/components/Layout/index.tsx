import { PropsWithChildren, Suspense, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './partials/Header';
import { ContentWrapper, LoadingWrapper, Wrapper } from './index.styles';
import { Footer } from './partials/Footer';
import { LoadingSpinner } from '@/components/LoadingSpiner';
import { AnimatedModal, IAnimatedModalProps } from '@/components/AnimatedModal';

interface ILayoutProps extends IAnimatedModalProps, PropsWithChildren {}
export default function Layout({
  isOpen,
  setIsOpen,
  close,
  children,
}: ILayoutProps) {
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
      {/* <AnimatePresence mode="wait" onExitComplete={close}> */}
      <AnimatedModal setIsOpen={setIsOpen} isOpen={isOpen} close={close} />
      <Header />
      <Suspense fallback={<Loading />}>
        <ContentWrapper as="main">{children}</ContentWrapper>
      </Suspense>
      <Footer />
      {/* </AnimatePresence> */}
    </Wrapper>
  );
}
