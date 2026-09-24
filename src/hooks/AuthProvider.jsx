import { createContext, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { VERIFICAR_SESION } from "../graphql/queries/sesion_user";
// 1. Creamos el contexto vacío
 // eslint-disable-next-line react-refresh/only-export-components
 export const AuthContext = createContext();

// 3. Creamos el Proveedor que envolverá a la aplicación
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // useQuery ejecuta automáticamente 'VERIFICAR_SESION' al cargar el componente
  const { data, loading, error } = useQuery(VERIFICAR_SESION, {
    fetchPolicy: "network-only", // Obliga a consultar al servidor, ignorando la caché interna
  });

  // El usuario de sesión se deriva directamente de la respuesta del servidor,
  // evitando un useEffect que dispare setState dentro del efecto.
  const sessionUser = data?.verificarSesion ?? null;
  const activeUser = user ?? sessionUser;
  const errorMessage = error;

  // Función para cerrar sesión manualmente desde el frontend
  const logout = () => {
    setUser(null);
    // Aquí podrías agregar la lógica para borrar la cookie llamando a una mutación de logout en tu backend
  };

  // Retornamos el proveedor con las variables globales que usará toda la app
  return (
    <AuthContext.Provider value={{ user: activeUser, loading, setUser, logout, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
}

