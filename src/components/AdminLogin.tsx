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
    <div className="relative z-10 min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-white text-sm mb-6 transition-colors"
        >
          &larr; Kembali ke Portfolio
        </button>
        <h1 className="text-2xl font-bold text-white uppercase tracking-wide text-center mb-2">Admin</h1>
        <p className="text-gray-500 text-sm text-center mb-8">
          Masukkan password untuk mengelola portfolio
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full px-4 py-3 rounded bg-transparent border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
          />
          {error && <p className="text-gray-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded border border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
