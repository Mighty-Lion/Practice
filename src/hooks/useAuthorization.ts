import { useContext } from 'react';
import { AuthorizationContext } from '@/providers/AuthorizationProvider';

export function useAuthorization() {
  const value = useContext(AuthorizationContext);

  return value;
}
