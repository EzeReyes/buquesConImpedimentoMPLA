import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { LOGIN } from "../graphql/mutations/sesion_user";

const Login = () => {

    const [login, { loading, error, data }] = useMutation(LOGIN);
    const navigate = useNavigate();

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (data?.login) {
        setTimeout(() => {
            navigate("/panel");
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email.trim() === "" || password.trim() === "") {
            alert("Por favor, ingrese un correo electrónico y contraseña válidos.");
            return;
        }
        login({ variables: { email: email, password: password } });
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <form class={data && data?.login && "hidden"} onSubmit={handleSubmit}>
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Contraseña" />
            <button type="submit">Login</button>
        </form>
        {data && data?.login && (
            <p className="text-green-500 text-2xl mt-4">{data?.login}</p>
        )}
    </div>
    );
}



export default Login;
