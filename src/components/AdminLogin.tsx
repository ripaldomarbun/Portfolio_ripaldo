import { useState, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  onBack: () => void;
}

export default function AdminLogin({ onBack }: Props) {
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(password)) {
      setPassword("");
    } else {
      setError("Password salah");
    }
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <button
          onClick={onBack}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm mb-6 transition-colors"
        >
          &larr; Kembali ke Portfolio
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Admin</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8">
          Masukkan password untuk mengelola portfolio
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full px-4 py-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary"
          />
          {error && <p className="text-primary text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
