import { useQuery, useMutation } from "@apollo/client/react";
import { GET_VESSELS } from "../graphql/queries/vessels";
import { DELETE_VESSEL } from "../graphql/mutations/vessels";
import Code from "../components/Code";
import { Link } from "react-router-dom";
const Vessels = () => {

    const { loading, error, data } = useQuery(GET_VESSELS);

    const [deleteVessel] = useMutation(DELETE_VESSEL, {
        onCompleted: () => {
            console.log("Vessel deleted successfully");
            // Optionally, you can refetch the vessels query to update the list
        }
    });

    const handleDelete = (id) => {
        deleteVessel({ variables: {
            deleteVesselId: id }
        });
    }



    if(loading) return <p>Cargando...</p>;

    if(error) return <p>Error: {error.message}</p>;

    console.log(data?.getVessels)

    console.log(data?.getInspections)

    return(

        <div>
            
            <div class="flex flex-row items-center justify-center">
            {

                data?.getVessels.map(vessel=>(
                        <div class="rounded border border-black w-3xs p-2 flex flex-col items-center justify-center" key={vessel.id}>

                                <h2 class="text-xl font-bold">{vessel.name}</h2>

                                <p>{vessel.tuition}</p>

                                <p className={`font-bold ${vessel?.inspections?.[0]?.code === "CODIGO_30" && "text-red-500"}`}>
                                    {vessel?.inspections?.[0]?.code}
                                </p>

                            <Link to={`/edit/${vessel.id}`} className="bg-gray-600 text-white hover:bg-black rounded p-1 mb-1">Editar</Link>
                            <button className="btn bg-red-500 text-white p-1 rounded" onClick={() => handleDelete(vessel?.id)}>Eliminar</button>
                        </div>

                ))

            }
            

            </div>

            <p>Total de buques: {data?.getVessels.length}</p>

            <Code />

            <Link to="/new-inspection" className="bg-blue-500 text-white rounded hover:bg-blue-600">Crear nueva inspección</Link>

        </div>

    );

}

export default Vessels;