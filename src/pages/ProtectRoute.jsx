import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function ProtectedRoute() {
  const { user, loading, errorMessage } = useAuth();

  // Mientras verifica si la cookie es válida con el backend, muestra una carga
  if (loading) return <h1>Cargando sesión...</h1>;

  if (errorMessage) return <h1>{errorMessage.message}</h1>

  // Si no hay usuario autenticado, redirige al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza la ruta hija (gracias al Outlet)
  return <Outlet />;
}
