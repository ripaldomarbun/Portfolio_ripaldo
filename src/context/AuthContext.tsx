import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ADMIN_PASSWORD_KEY = "portfolio_admin_pass";
const AUTH_SESSION_KEY = "portfolio_auth";
const DEFAULT_PASSWORD = "admin123";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(AUTH_SESSION_KEY) === "true";
  });

  useEffect(() => {
    const stored = localStorage.getItem(ADMIN_PASSWORD_KEY);
    if (!stored) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_PASSWORD);
    }
  }, []);

  const login = (password: string) => {
    const stored = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (password === stored) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
