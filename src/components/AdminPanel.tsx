import { useAuth } from "../context/AuthContext";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

interface Props {
  onBack: () => void;
}

export default function AdminPanel({ onBack }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <AdminLogin onBack={onBack} />;
  return <AdminDashboard onBack={onBack} />;
}
