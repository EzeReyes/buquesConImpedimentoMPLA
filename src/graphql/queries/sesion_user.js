import { gql } from "@apollo/client";

const VERIFICAR_SESION = gql`
  query verificarSesion {
    verificarSesion {
      id
      email
    }
  }
`;

export { VERIFICAR_SESION };

