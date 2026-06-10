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
    <div className="min-h-screen bg-[#141414] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <button
          onClick={onBack}
          className="text-[#b3b3b3] hover:text-white text-sm mb-6 transition-colors"
        >
          &larr; Kembali ke Portfolio
        </button>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Admin</h1>
        <p className="text-[#b3b3b3] text-sm text-center mb-8">
          Masukkan password untuk mengelola portfolio
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full px-4 py-3 rounded bg-[#1a1a1a] border border-[#333] text-white placeholder-[#666] focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914]"
          />
          {error && <p className="text-[#E50914] text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded bg-[#E50914] text-white font-semibold hover:bg-[#f40612] transition-colors"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
