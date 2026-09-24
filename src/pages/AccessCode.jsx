import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { VERIFICAR_CODIGO } from "../graphql/mutations/sesion_user";

const AccessCode = () => {
    const [verificarCodigo, {data, loading, error}] = useMutation(VERIFICAR_CODIGO)
    const navigate = useNavigate();

     const handleSubmit = (e) => {
        e.preventDefault();
        const code = e.target.code.value;
        if(code.trim() === "") {
            alert("Por favor, ingrese un código válido.");
            return;
        }
        const email = localStorage.getItem("email");

        verificarCodigo({ variables: { email: email, code: code } });
    }

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (data && data?.verificarCodigo?.success) {
        setTimeout(() => {
            navigate("/panel");
        }, 10000);
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <form class={data && data?.verificarCodigo && ("hidden")} onSubmit={handleSubmit}>
            <input type="text" id="code" placeholder="Código" />
            <button type="submit">Login</button>
        </form>
        {data && data?.verificarCodigo && (
            <p className="text-green-500 mt-4">{data?.verificarCodigo?.message}</p>
        )}
    </div>
    );
}



export default AccessCode;
