import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { NEW_VESSEL } from "../graphql/mutations/vessels";

const NewVessel = () => {

    const [newVessel] = useMutation(NEW_VESSEL, {
        onCompleted: () => {
            console.log("Vessel created successfully");
            // Navigate to the list of vessels or show a success message
        },
        onError: (error) => {
            console.error(error)
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = {
            name: formData.get('name'),
            tuition: formData.get('tuition')
        };
        newVessel({ variables: { input } });
    }



    return (
        <div>
            <Link to="/">Volver</Link>
            <h1>Crear nuevo buque</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="tuition">Matrícula:</label>
                <input type="text" id="tuition" name="tuition" />
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}

export default NewVessel;
