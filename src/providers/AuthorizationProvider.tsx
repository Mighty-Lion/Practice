import { createContext, PropsWithChildren, useCallback, useState } from 'react';

export interface IAuthorizationContextProps {
  isAuthorized?: boolean;
  logIn?: () => void;
  logOut?: () => void;
}

export const AuthorizationContext = createContext<IAuthorizationContextProps>(
  null!
);
export function AuthorizationProvider({ children }: PropsWithChildren) {
  const [isAuthorized, setAuthorized] = useState(false);

  const logIn = useCallback(() => {
    setAuthorized(true);
  }, [setAuthorized]);

  const logOut = useCallback(() => {
    setAuthorized(false);
  }, [setAuthorized]);

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, logIn, logOut }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
