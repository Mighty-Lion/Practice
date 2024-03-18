import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimatedModalContent = styled(motion.div)`
  position: relative;
  padding: 30px 15px 10px;
  background: var(--background-primary);
  border-radius: 10px;
`;

export const AnimatedModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;