import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_VESSEL } from "../graphql/queries/vessels";
import { EDIT_VESSEL } from "../graphql/mutations/vessels";

const EditVessel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { loading, error, data } = useQuery(GET_VESSEL, {
        variables: { id }
    });

    const [editVessel] = useMutation(EDIT_VESSEL, {
        onCompleted: () => {
            navigate('/');
        }
    });

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error.message}</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const input = {
            name: formData.get('name'),
            tuition: formData.get('tuition'),
        };

        editVessel({ variables: { input, id } });
    }

    console.log(data?.getVessel)

    return (
        <div>
            <Link to="/">Volver</Link>
            <h1>Editar buque</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" defaultValue={data?.getVessel?.name} />
                <label htmlFor="tuition">Matrícula:</label>
                <input type="text" id="tuition" name="tuition" defaultValue={data?.getVessel?.tuition} />
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    )
}

export default EditVessel;