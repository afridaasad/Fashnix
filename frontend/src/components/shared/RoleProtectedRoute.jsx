import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function RoleProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  if (loading) return null; // wait until auth restores

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RoleProtectedRoute;
