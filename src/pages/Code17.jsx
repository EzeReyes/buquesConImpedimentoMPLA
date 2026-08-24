import { useQuery, useMutation } from "@apollo/client/react";
import { GET_INSPECTIONS } from "../graphql/queries/inspections";
import { DELETE_INSPECTION } from "../graphql/mutations/inspections";
import { Link } from "react-router-dom";



const Code17 = () => {
    const { loading, error, data } = useQuery(GET_INSPECTIONS);
    const [deleteInspection] = useMutation(DELETE_INSPECTION, {
        onCompleted: () => {
            console.log("Inspection deleted successfully");
            // Optionally, you can refetch the inspections query to update the list
        }
    });

    if(loading) return <p>Cargando...</p>;

    if(error) return <p>Error: {error.message}</p>;

    const CODIGO_17= data?.getInspections?.filter(inspection => inspection.code === "CODIGO_17");

    const handleDelete = (id) => {
        deleteInspection({ variables: {
            deleteInspectionId: id }
        });
    }

    return (
        <div>
            <h1>Inspecciones</h1>
            <ul>
                {CODIGO_17?.map(inspection => (
                    <li class="flex flex-col items-center justify-center p-2 rounded border-black border" key={inspection.id}>
                        <p>{inspection.vessel.name} ({inspection.vessel.tuition})</p>
                        {inspection.previousInspection && (
                            <>
                                <p>Previous Inspection Code: {inspection.previousInspection?.code}</p>
                                <p>Previous Inspection Date: {inspection.previousInspection?.date}</p>
                            </>
                        )}
                        <p>IF : {inspection.inform}</p>
                        <p>Fecha: {inspection.date}</p>
                        <p class={inspection.code === "CODIGO_17" && "bg-orange-700 rounded text-white"}>Código: {inspection.code}</p>
                        <p>Motivo: {inspection.reason}</p>
                        <p>Tipo de Inspección: {inspection.type}</p>
                        <p>Estado: {inspection.status}</p>
                        <Link to={`/edit-inspection/${inspection.id}`} className="btn btn-secondary mt-2">Editar Inspección</Link>
                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(inspection?.id)}>Eliminar Inspección</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Code17;