import { useContext } from "react";
import { AuthContext }  from "../hooks/AuthProvider"; // 👈 Importa el contexto del paso anterior

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
