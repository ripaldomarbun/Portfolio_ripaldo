import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ADMIN_PASSWORD_KEY = "portfolio_admin_pass";
const DEFAULT_PASSWORD = "admin123";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

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
