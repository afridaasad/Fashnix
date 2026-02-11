import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";
import RoleProtectedRoute from "../components/shared/RoleProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CustomerLayout>
              <div>Home</div>
            </CustomerLayout>
          }
        />

        <Route
          path="/login"
          element={
            <CustomerLayout>
              <div>Login</div>
            </CustomerLayout>
          }
        />

        <Route
          path="/admin"
          element={
            <RoleProtectedRoute role="admin">
              <AdminLayout>
                <div>Admin Dashboard</div>
              </AdminLayout>
            </RoleProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
