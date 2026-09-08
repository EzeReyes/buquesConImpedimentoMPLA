import { useQuery } from "@apollo/client/react";
import { GET_VESSELS } from "../graphql/queries/vessels";
import Code from "./Code";
import { Link } from "react-router-dom";
const Vessels = () => {

    const { loading, error, data } = useQuery(GET_VESSELS);

    if(loading) return <p>Cargando...</p>;

    if(error) return <p>Error: {error.message}</p>;

    return(

        <div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-40">
            {
                
                data?.getVessels.map(vessel=>(
                        <Link to={`/${vessel.id}`}>
                            <div class={`rounded border border-black w-3xs p-2 flex flex-col items-center justify-center ${vessel?.inspections?.[0]?.code === "CODIGO_30" ? "bg-amber-100" : "bg-green-100"}`} key={vessel.id}>
                                    
                                    <h2 class="text-xl font-bold">{vessel.name}</h2>

                                    <p>{vessel.tuition}</p>

                                    <p className={`font-bold ${vessel?.inspections?.[0]?.code === "CODIGO_30" && "text-red-500"}`}>
                                        {vessel?.inspections?.[0]?.code}
                                    </p>

                            </div>
                        </Link>
                ))

            }
                        <p class="font-bold text-2xl">Total de buques: {data?.getVessels.length}</p>

            </div>


            <Code />

        </div>

    );

}

export default Vessels;