import { useQuery } from "@apollo/client/react";
import { GET_INSPECTIONS } from "../graphql/queries/inspections";



const Code30 = () => {
    const { loading, error, data } = useQuery(GET_INSPECTIONS);

    if(loading) return <p>Cargando...</p>;

    if(error) return <p>Error: {error.message}</p>;

    const CODIGO_30= data?.getInspections?.filter(inspection => inspection.code === "CODIGO_30");
    return (
        <div className="w-full max-w-5xl mx-auto px-3 sm:px-6">

            <h1 className="text-2xl sm:text-3xl font-bold text-center my-5">
                Buques con Código 30
            </h1>

            <ul className="flex flex-col gap-4">

                {CODIGO_30?.map(inspection => (

                    <li
                        key={inspection.id}
                        className="w-full rounded-lg border border-black bg-white p-4 shadow-sm"
                    >

                        <div className="border-b border-gray-300 pb-3 mb-3">
                            <p className="text-lg font-bold">
                                {inspection.vessel.name}
                            </p>

                            <p className="text-sm text-gray-600">
                                Matrícula: {inspection.vessel.tuition}
                            </p>
                        </div>


                        {inspection.previousInspection && (
                            <div className="bg-gray-100 rounded-md p-3 mb-3">

                                <p className="font-semibold mb-1">
                                    Inspección anterior
                                </p>

                                <p className="text-sm">
                                    Código: {inspection.previousInspection.code}
                                </p>

                                <p className="text-sm">
                                    Fecha: {inspection.previousInspection.date}
                                </p>

                            </div>
                        )}


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                            <p>
                                <strong>IF:</strong>{" "}
                                {inspection.inform}
                            </p>

                            <p>
                                <strong>Fecha:</strong>{" "}
                                {inspection.date}
                            </p>

                            <p>
                                <strong>Motivo:</strong>{" "}
                                {inspection.reason}
                            </p>

                            <p>
                                <strong>Tipo:</strong>{" "}
                                {inspection.type}
                            </p>

                            <p>
                                <strong>Estado:</strong>{" "}
                                {inspection.status}
                            </p>

                            <p>
                                <strong>Código:</strong>{" "}
                                <span
                                    className={
                                        inspection.code === "CODIGO_30"
                                            ? "inline-block bg-red-700 text-white rounded px-2 py-1 font-bold"
                                            : ""
                                    }
                                >
                                    {inspection.code}
                                </span>
                            </p>

                        </div>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default Code30;