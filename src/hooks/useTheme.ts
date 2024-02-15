import { useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeProvider';

export function useTheme() {
  const value = useContext(ThemeContext);

  return value;
}
