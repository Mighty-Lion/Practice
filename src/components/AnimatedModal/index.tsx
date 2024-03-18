import { AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Dispatch, SetStateAction, useEffect } from 'react';
import {
  AnimatedModalClose,
  AnimatedModalContent,
  Backdrop,
} from '@/components/AnimatedModal/index.styles';
import { TitleH2 } from '@/components/TitleH2/index.styles';
import closeSvg from '@/assets/images/svg/close.svg';

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export interface IAnimatedModalProps {
  isOpen?: boolean;
  toggle?: () => void;
  open?: () => void;
  close?: () => void;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export function AnimatedModal({
  isOpen,
  setIsOpen,
  close,
}: IAnimatedModalProps) {
  const location = useLocation();

  useEffect(() => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Backdrop
          key="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatedModalContent key="modal" variants={modal}>
            <Link to="/">
              <AnimatedModalClose onClick={close}>
                <img src={closeSvg} alt="close img" />
              </AnimatedModalClose>
            </Link>
            <TitleH2>I animated modal</TitleH2>
          </AnimatedModalContent>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
