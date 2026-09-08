import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_VESSEL } from "../graphql/queries/vessels";

const VesselDetail = () => {
    const { id } = useParams();
    
    const { loading, error, data } = useQuery(GET_VESSEL, {
        variables: { getVesselId: id }
    });

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-2xl font-bold text-center">Detalle del buque</h1>
            <div class="rounded border border-black w-3xs p-2 flex flex-col items-center justify-center">
                <img src="./img-vessel.jpg" class="h-40 w-auto" alt={data?.getVessel?.name} />
                <p><strong>Nombre:</strong> {data?.getVessel?.name}</p>
                <p><strong>Matrícula:</strong> {data?.getVessel?.tuition}</p>
            </div>
            <div>
                <h2 class="text-center text-lg m-6">Inspecciones Realizadas</h2>
                <table class="table-auto border-collapse border border-black bg-lime-300 rounded">
                    <thead>
                        <tr>
                            <th class="border border-black px-4 py-2">Código</th>
                            <th class="border border-black px-4 py-2">Fecha</th>
                            <th class="border border-black px-4 py-2">Estado</th>
                            <th class="border border-black px-4 py-2">Tipo</th>
                            <th class="border border-black px-4 py-2">Inform</th>
                            <th class="border border-black px-4 py-2">Razón</th>
                            <th class="border border-black px-4 py-2">Inspección Anterior</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getVessel?.inspections?.map(inspection => (
                            <tr key={inspection.id}>
                                <td class="border border-black px-4 py-2">{inspection.code}</td>
                                <td class="border border-black px-4 py-2">{inspection.date}</td>
                                <td class="border border-black px-4 py-2">{inspection.status}</td>
                                <td class="border border-black px-4 py-2">{inspection.type}</td>
                                <td class="border border-black px-4 py-2">{inspection.inform}</td>
                                <td class="border border-black px-4 py-2">{inspection.reason}</td>
                                <td class="border border-black px-4 py-2">{inspection.previousInspection?.id || "No hay inspección anterior"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VesselDetail;