import { useQuery, useMutation } from "@apollo/client/react";
import { GET_INSPECTION } from "../graphql/queries/inspections";
import { EDIT_INSPECTION } from "../graphql/mutations/inspections";
import { useParams } from "react-router-dom";


const EditInspection = () => {
        const { id } = useParams();
    
    const { loading, error, data } = useQuery(GET_INSPECTION, {
        variables: { id: id },
    });

    const [editInspection] = useMutation(EDIT_INSPECTION, {
        onCompleted: () => {
            console.log("Inspection edited successfully");
            // Optionally, you can refetch the inspection query to update the details
        }
    });

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error.message}</p>;

    const handleEdit = (updatedInspection) => {
        editInspection({
            variables: {
                editInspectionId: id,
                input: updatedInspection,
            },
        });
    }

    return (
        <div>
            <h1>Editar Inspección</h1>
            <form>
                <label>
                    Date:
                    <input type="text" name="date" defaultValue={data.getInspection.date} />
                </label>
                <label>
                    Type:
                    <select name="type" defaultValue={data.getInspection.type}>
                        <option value="INICIAL">Inicial</option>
                        <option value="MAS_DETALLADA">Más Det</option>
                        <option value="DE_SEGUIMIENTO">Follow Up</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select name="status" defaultValue={data.getInspection.status}>
                        <option value="MANTIENE_PENDIENTE_S">MANTIENE PENDIENTES</option>
                        <option value="SIN_PENDIENTES">SIN PENDIENTES</option>
                        <option value="MANTIENE_PENDIENTE_S_SE_OTORGO_PLAZO_PARA_NAVEGAR_VER_INFORME">MANTIENE PENDIENTES, SE OTORGO PLAZO PARA NAVEGAR</option>
                    </select>
                </label>
                <label>
                    Inform:
                    <input type="text" name="inform" defaultValue={data.getInspection.inform} />
                </label>
                <label>
                    Reason:
                    <input type="text" name="reason" defaultValue={data.getInspection.reason} />
                </label>
                <label>
                    Code:
                    <select name="code" defaultValue={data.getInspection.code}>
                        <option value="CODIGO_17">CODIGO_17</option>
                        <option value="CODIGO_30">CODIGO_30</option>
                        <option value="CODIGO_18">CODIGO_18</option>
                        <option value="CODIGO_ROJO">CODIGO_ROJO</option>
                        <option value="CODIGO_10">CODIGO_10</option>
                        <option value="SIN_PENDIENTES">SIN PENDIENTES</option>
                    </select>
                </label>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    const updatedInspection = {
                        date: e.target.date.value,
                        type: e.target.type.value,
                        status: e.target.status.value,
                        inform: e.target.inform.value,
                        reason: e.target.reason.value,
                        code: e.target.code.value,
                    };
                    handleEdit(updatedInspection);
                }}>Guardar Cambios</button>
            </form>
        </div>
    );
}

export default EditInspection;