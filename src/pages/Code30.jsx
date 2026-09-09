import { useQuery } from "@apollo/client/react";
import { GET_INSPECTIONS } from "../graphql/queries/inspections";



const Code30 = () => {
    const { loading, error, data } = useQuery(GET_INSPECTIONS);

    if(loading) return <p>Cargando...</p>;

    if(error) return <p>Error: {error.message}</p>;

    const CODIGO_30= data?.getInspections?.filter(inspection => inspection.code === "CODIGO_30");
    return (
        <div>
            <h1 class="text-2xl font-bold text-center my-4">Buques con Código 30</h1>
            <ul>
                {CODIGO_30?.map(inspection => (
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
                        <p class={inspection.code === "CODIGO_30" && "bg-red-700 rounded text-white"}>Código: {inspection.code}</p>
                        <p>Motivo: {inspection.reason}</p>
                        <p>Tipo de Inspección: {inspection.type}</p>
                        <p>Estado: {inspection.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Code30;