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
        <div className="flex flex-col items-center justify-center w-full px-3 sm:px-4">

            <h1 className="text-2xl font-bold text-center mt-4">
                Detalle del buque
            </h1>

            {/* Información del buque */}
            <div className="rounded-lg border border-black w-full max-w-xs p-3 flex flex-col items-center justify-center my-4 shadow-sm">

                <img
                    src="./img-vessel.jpg"
                    className="h-40 w-auto object-contain mb-2"
                    alt={data?.getVessel?.name}
                />

                <div className="w-full text-sm sm:text-base">
                    <p className="mb-1">
                        <strong>Nombre:</strong> {data?.getVessel?.name}
                    </p>

                    <p>
                        <strong>Matrícula:</strong> {data?.getVessel?.tuition}
                    </p>
                </div>

            </div>

            {/* Inspecciones */}
            <div className="w-full max-w-7xl">

                <h2 className="text-center text-lg font-semibold my-5">
                    Inspecciones Realizadas
                </h2>

                {/* Scroll horizontal únicamente en mobile */}
                <div className="w-full overflow-x-auto rounded-lg border border-black">
                    <table className="min-w-225 w-full table-auto border-collapse bg-lime-300">

                        <thead>
                            <tr>
                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Código
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Fecha
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Estado
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Tipo
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Inform
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Razón
                                </th>

                                <th className="border border-black px-3 py-2 text-sm sm:text-base">
                                    Inspección Anterior
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.getVessel?.inspections?.map(inspection => (
                                <tr key={inspection.id}>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.code}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm whitespace-nowrap">
                                        {inspection.date}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.status}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.type}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.inform}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.reason}
                                    </td>

                                    <td className="border border-black px-3 py-2 text-sm">
                                        {inspection.previousInspection?.id ||
                                            "No hay inspección anterior"}
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default VesselDetail;